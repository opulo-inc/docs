/* Opulo Zoduki + GLightbox bridge.
 */
(function () {
  'use strict';

  const GALLERY = [
    '.zoduki-gallery', '.zoduki__gallery', '.zoduki-images',
    '.zoduki__images', '.zd-gallery', '[class*="zoduki"][class*="gallery"]',
    '[class*="zoduki"][class*="image"]'
  ].join(',');
  const THUMB = '[class*="thumb"], [aria-label*="thumbnail" i], [role="tab"], .glightbox-container';
  let viewer = null;
  let closeToken = 0;

  function displayed(img) {
    if (!(img instanceof HTMLImageElement)) return false;
    const r = img.getBoundingClientRect();
    if (r.width < 130 || r.height < 90) return false;
    const s = getComputedStyle(img);
    if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) return false;
    for (let e = img.parentElement; e && e !== document.body; e = e.parentElement) {
      const style = getComputedStyle(e);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
      if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true') return false;
    }
    return true;
  }

  function isMain(img) {
    return !!(img && img.closest(GALLERY) && !img.closest(THUMB) && displayed(img));
  }

  function findImage(event) {
    const clicked = event.target instanceof Element ? event.target : null;
    if (!clicked) return null;
    const img = clicked.closest('img');
    if (isMain(img)) return img;

    // Some Zoduki galleries put a transparent link over the displayed photo.
    // Look for the visually active image under the actual click position.
    const gallery = clicked.closest(GALLERY);
    if (!gallery || clicked.closest(THUMB) || clicked.closest('button, [role="button"]')) return null;
    const candidates = Array.from(gallery.querySelectorAll('img')).filter(isMain);
    const x = event.clientX, y = event.clientY;
    const hit = candidates.find(function (candidate) {
      const r = candidate.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    });
    if (hit) return hit;
    return candidates.length === 1 ? candidates[0] : null;
  }

  function sourceFor(img) {
    // This is the important fix: Zoduki may update <img src> while the
    // surrounding <a href> still points to the FIRST image of the step.
    const candidate = img.currentSrc || img.getAttribute('src') || img.src;
    if (candidate && !candidate.startsWith('data:')) return new URL(candidate, document.baseURI).href;
    // Only fall back to link when the displayed image has no usable source.
    const link = img.closest('a[href]');
    if (link && /\.(?:png|jpe?g|gif|webp|avif|svg)(?:[?#].*)?$/i.test(link.href)) return link.href;
    return candidate || null;
  }

  document.addEventListener('click', function (event) {
    const img = findImage(event);
    if (!img || typeof window.GLightbox !== 'function') return;
    const href = sourceFor(img);
    if (!href) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (viewer) {
      try { viewer.destroy(); } catch (_) { /* ignore stale instance */ }
      viewer = null;
    }
    const token = ++closeToken;
    try {
      const lightbox = window.GLightbox({
        elements: [{ href: href, type: 'image', alt: img.alt || '' }],
        zoomable: true,
        draggable: false,
        touchNavigation: true,
        keyboardNavigation: true,
        loop: false,
        onClose: function () {
          if (viewer === lightbox) viewer = null;
          window.setTimeout(function () {
            // Don't destroy a newer lightbox opened meanwhile.
            if (closeToken === token) {
              try { lightbox.destroy(); } catch (_) { /* ignore */ }
            }
          }, 350);
        }
      });
      viewer = lightbox;
      lightbox.open();
    } catch (err) {
      console.warn('[Opulo] Zoduki/GLightbox image open failed:', err);
    }
  }, true);
})();
