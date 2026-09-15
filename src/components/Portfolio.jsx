import { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from '../data';
import { ArrowUpRight } from './Icons';

const bundledProjectNames = ['Becherovka', 'Biolage'];
const blankImage =
  'data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"%3E%3Crect width="16" height="10" fill="%23e5e7df"/%3E%3C/svg%3E';

function ProjectDialog({ project, open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.classList.add('dialog-open');
    }
    if (!open && dialog.open) dialog.close();

    const handleClose = () => {
      document.body.classList.remove('dialog-open');
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
      document.body.classList.remove('dialog-open');
    };
  }, [open, onClose]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <button
        className="dialog-close"
        type="button"
        aria-label="Zavřít detail realizace"
        onClick={() => dialogRef.current?.close()}
      >
        ×
      </button>
      <img className="dialog-image" src={project.image} alt={`${project.name} — detail realizace`} />
      <div className="dialog-copy">
        <span className="dialog-tags">{project.type}</span>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p className="dialog-description">{project.description}</p>
      </div>
    </dialog>
  );
}

export default function Portfolio() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const openerRef = useRef(null);
  const imageRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [dialogProject, setDialogProject] = useState(null);
  const [scrollMode, setScrollMode] = useState(false);
  const [railHeight, setRailHeight] = useState(null);
  const [imageReady, setImageReady] = useState(true);
  const travelRef = useRef(0);

  const select = useCallback((index) => {
    const normalized = (index + projects.length) % projects.length;
    setCurrent(normalized);
  }, []);

  const measure = useCallback(() => {
    const eligible = window.matchMedia(
      '(min-width: 850px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)',
    ).matches;
    setScrollMode(eligible);

    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin || !eligible) {
      travelRef.current = 0;
      setRailHeight(null);
      return;
    }

    const travel = Math.max(520, window.innerHeight * 0.78) * (projects.length - 1);
    travelRef.current = travel;
    setRailHeight(Math.ceil(pin.getBoundingClientRect().height + travel));
  }, []);

  const paint = useCallback(() => {
    if (!scrollMode || !travelRef.current || !sectionRef.current) return;
    const progress = Math.max(
      0,
      Math.min(1, (20 - sectionRef.current.getBoundingClientRect().top) / travelRef.current),
    );
    select(Math.round(progress * (projects.length - 1)));
  }, [scrollMode, select]);

  useEffect(() => {
    measure();
    const media = window.matchMedia(
      '(min-width: 850px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)',
    );
    const onMedia = () => measure();

    media.addEventListener?.('change', onMedia);
    window.addEventListener('resize', measure, { passive: true });
    document.fonts?.ready.then(measure);

    return () => {
      media.removeEventListener?.('change', onMedia);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  useEffect(() => {
    if (!scrollMode) return undefined;

    let raf = 0;
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          paint();
        });
      }
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [paint, scrollMode]);

  const project = projects[current];
  const needsBundledImage = bundledProjectNames.includes(project.name);

  useEffect(() => {
    setImageReady(!needsBundledImage);
    if (!needsBundledImage) return undefined;

    const image = imageRef.current;
    if (!image) return undefined;

    image.src = blankImage;

    const observer = new MutationObserver(() => {
      if (image.src.startsWith('data:image/webp;base64,')) {
        setImageReady(true);
      }
    });
    observer.observe(image, { attributes: true, attributeFilter: ['src'] });

    const script = document.createElement('script');
    script.src = `/realizace-image-fix-v1.js?v=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);

    const retry = window.setTimeout(() => {
      if (!image.src.startsWith('data:image/webp;base64,')) {
        const retryScript = document.createElement('script');
        retryScript.src = `/realizace-image-fix-v1.js?v=${Date.now()}-retry`;
        retryScript.async = true;
        document.body.appendChild(retryScript);
        window.setTimeout(() => retryScript.remove(), 1200);
      }
    }, 350);

    return () => {
      observer.disconnect();
      window.clearTimeout(retry);
      script.remove();
    };
  }, [current, needsBundledImage]);

  const go = (index) => {
    const next = (index + projects.length) % projects.length;

    if (scrollMode && travelRef.current && sectionRef.current) {
      const start = sectionRef.current.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({
        top: start + (travelRef.current * next) / (projects.length - 1),
        behavior: 'smooth',
      });
    } else {
      select(next);
    }
  };

  const openDialog = (event) => {
    openerRef.current = event.currentTarget;
    const displayedImage = imageRef.current;
    if (!displayedImage || !imageReady) return;
    setDialogProject({
      ...project,
      image: displayedImage.currentSrc || displayedImage.src || project.image,
    });
  };

  const closeDialog = useCallback(() => {
    setDialogProject(null);
    openerRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className={scrollMode ? 'section projects scroll-cases' : 'section projects'}
        style={railHeight ? { '--case-rail-height': `${railHeight}px` } : undefined}
      >
        <div className="portfolio-pin" ref={pinRef}>
          <div className="portfolio-heading">
            <div>
              <span className="section-label">02 / Naše práce</span>
              <h2>Vybrané realizace.</h2>
            </div>
            <p>
              {scrollMode
                ? 'Scrollujte a objevte jednotlivé realizace.'
                : 'Procházejte realizace pomocí šipek.'}
            </p>
          </div>

          <div className="project-stage">
            <article className="project" key={project.name}>
              <button
                className={`project-visual${imageReady ? ' is-ready' : ' is-loading'}`}
                type="button"
                aria-label={`Zvětšit realizaci ${project.name}`}
                onClick={openDialog}
              >
                <img
                  ref={imageRef}
                  src={needsBundledImage ? blankImage : project.image}
                  alt={`${project.name} — ukázka realizace`}
                  loading="eager"
                  decoding="async"
                  onLoad={() => {
                    if (!needsBundledImage || imageRef.current?.src.startsWith('data:image/webp;base64,')) {
                      setImageReady(true);
                    }
                  }}
                />
                {!imageReady && <span className="project-image-placeholder" aria-hidden="true" />}
                <span className="zoom" aria-hidden="true">
                  <ArrowUpRight size={22} />
                </span>
              </button>

              <div className="case-copy">
                <span className="case-number">
                  {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <div className="project-title">
                  <h3>{project.name}</h3>
                  <span>{project.type}</span>
                </div>
                <p>{project.description}</p>
                <button className="case-open" type="button" onClick={openDialog} disabled={!imageReady}>
                  Prohlédnout detail <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          </div>

          <div className="case-controls">
            <span className="case-status" aria-live="polite" aria-atomic="true">
              {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} — {project.name}
            </span>
            <div>
              <button type="button" aria-label="Předchozí realizace" onClick={() => go(current - 1)}>
                ←
              </button>
              <button type="button" aria-label="Další realizace" onClick={() => go(current + 1)}>
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectDialog project={dialogProject} open={Boolean(dialogProject)} onClose={closeDialog} />
    </>
  );
}
