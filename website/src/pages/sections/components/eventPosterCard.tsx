import type { FC } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import gsap from 'gsap';

import '../../../css/customTheme.css';

interface EventPosterCardInfo {
  show: boolean;
  expire: string;
  image: string;
  link: string;
}

const EventPosterCard:FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const {
    show, expire, link, image,
  } = siteConfig.customFields.eventPosterCard as EventPosterCardInfo;
  const [display, setDisplay] = useState(false);
  const picRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(picRef.current, {
      x: 500,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      delay: 3.0,
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('SHOW_EVENT_ENTRY')) {
      setDisplay(true);
    }

    if (!show) {
      setDisplay(false);
    } else {
      const expireTimestamp = new Date(expire).getTime();
      if (expireTimestamp <= new Date().getTime()) {
        setDisplay(false);
      }
    }
  }, []);

  const onClose = () => {
    gsap.to(picRef.current, {
      x: 500,
      opacity: 0,
      onComplete: () => {
        setDisplay(false);
      },
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem('SHOW_EVENT_ENTRY', 'true');
    }
  };

  if (!display) {
    return null;
  }

  return (
    <div ref={picRef} className="pic-wrapper">
      <button className="pic-wrapper-close" onClick={onClose} type="button">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          className="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
        </svg>
      </button>
      <a href={link} onClick={onClose}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default EventPosterCard;
