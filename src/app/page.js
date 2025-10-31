'use client';
import { useRef, useEffect, useState } from 'react';
import { animate } from 'framer-motion';

import ParticleBackground from '@/components/particle/ParticleBackground';
import Hero from "@/components/pages/Hero";
import Showoff from "@/components/pages/Showoff";
import SkillsComponent from '@/components/pages/SkillsComponent';
import Contact from '@/components/pages/Contact';

import ScrollMouseHint from '@/components/ScrollMouseHint';
import Popup from "@/components/Popup";

export default function Page() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const touchStartY = useRef(0);
  const isAnimating = useRef(false);

  const isMobile = useIsMobile();
  const totalSections = 4;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    isAnimating.current = true;
    const target = sectionsRef.current[index].offsetTop;
    animate(container.scrollTop, target, {
      duration: 0.7,
      onUpdate(value) {
        container.scrollTop = value;
      },
      onComplete() {
        isAnimating.current = false;
      },
    });

    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isMobile) {
      setShowMobilePopup(true);
    }
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const isInsideScrollable = e.target.closest("[data-scrollable]");
      if (isInsideScrollable) {
        const el = isInsideScrollable;
        const canScrollUp = el.scrollTop > 0;
        const canScrollDown = el.scrollTop + el.clientHeight < el.scrollHeight;
        const canScrollLeft = el.scrollLeft > 0;
        const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;

        if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
          return;
        }

        if ((e.deltaY < 0 && canScrollUp) || (e.deltaY > 0 && canScrollDown)) return;
      }

      if (isAnimating.current) return;
      e.preventDefault();

      let nextIndex = currentIndex + (e.deltaY > 0 ? 1 : -1);
      nextIndex = Math.max(0, Math.min(sectionsRef.current.length - 1, nextIndex));

      if (nextIndex !== currentIndex) scrollToIndex(nextIndex);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const isInsideScrollable = e.target.closest("[data-scrollable]");
      if (isInsideScrollable) return;
      if (isAnimating.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - touchEndY;
      if (Math.abs(delta) < 30) return;

      let nextIndex = currentIndex + (delta > 0 ? 1 : -1);
      nextIndex = Math.max(0, Math.min(sectionsRef.current.length - 1, nextIndex));

      if (nextIndex !== currentIndex) scrollToIndex(nextIndex);
    };

    const handleTouchCancel = handleTouchEnd;

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    container.addEventListener('touchcancel', handleTouchCancel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchCancel);
    };
  }, [currentIndex]);

  return (
    <main ref={containerRef} className="h-screen overflow-hidden">
      {/* Particles Background */}
      <ParticleBackground style={{ position: "absolute", top: "0", left: "0" }} />

      <Hero scrollToIndex={scrollToIndex} ref={(el) => el && (sectionsRef.current[0] = el)} />
      <Showoff ref={(el) => el && (sectionsRef.current[1] = el)} />
      <SkillsComponent ref={(el) => el && (sectionsRef.current[2] = el)} />
      <Contact ref={(el) => el && (sectionsRef.current[3] = el)} />

      {!isMobile && (
        <ScrollMouseHint
          currentIndex={currentIndex}
          totalSections={totalSections}
          onClick={() => {
            if (currentIndex < totalSections - 1) {
              scrollToIndex(currentIndex + 1);
            } else {
              scrollToIndex(0);
            }
          }}
        />
      )}

      {isMobile && (
        <Popup isOpen={showMobilePopup} onClose={() => setShowMobilePopup(false)}>
        <div className="relative p-6">
          <h2 className="text-xl font-bold mb-4">Better Experience on Desktop</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            You are visiting this website on a mobile device. For the best experience, we recommend using a desktop PC.
          </p>
          <div className="absolute bottom-4 right-4">
            <button
              className="px-4 py-2 bg-zinc-600 text-white rounded-md"
              onClick={() => setShowMobilePopup(false)}
            >
              Got it
            </button>
          </div>
        </div>
      </Popup>
      )}

    </main>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}
