import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const bootstrapSEO = () => {
  const documentElement = document.documentElement;
  const head = document.head;
  const canonicalUrl = 'https://alnabihospital.com/';
  const title = '🏥 Al Nabi Hospital — Trusted Healthcare';
  const description =
    'Al Nabi Hospital delivers 24/7 multi-specialty healthcare, advanced diagnostics, and compassionate medical expertise in Vijayapura.';
  const imageUrl = 'https://alnabihospital.com/assets/logo-512.png';

  documentElement.lang = 'en-IN';
  document.title = title;

  const ensureMeta = (identifier: { name?: string; property?: string }, content: string) => {
    const selector = identifier.name
      ? `meta[name="${identifier.name}"]`
      : identifier.property
        ? `meta[property="${identifier.property}"]`
        : '';

    if (!selector) {
      return;
    }

    let tag = head.querySelector<HTMLMetaElement>(selector);
    if (!tag) {
      tag = document.createElement('meta');
      if (identifier.name) {
        tag.setAttribute('name', identifier.name);
      }
      if (identifier.property) {
        tag.setAttribute('property', identifier.property);
      }
      head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  const ensureLink = (rel: string, href: string, attributes: Record<string, string> = {}) => {
    const attributeSelector = Object.entries(attributes)
      .filter(([key]) => key !== 'href' && key !== 'rel')
      .map(([key, value]) => `[${key}="${value}"]`)
      .join('');
    let tag = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${attributeSelector}`);
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      head.appendChild(tag);
    }
    tag.setAttribute('href', href);
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'href' && key !== 'rel') {
        tag.setAttribute(key, value);
      }
    });
  };

  ensureMeta({ name: 'description' }, description);
  ensureMeta({ property: 'og:title' }, title);
  ensureMeta({ property: 'og:description' },
    'Discover compassionate, technology-driven healthcare at Al Nabi Hospital. Explore departments, meet specialists, and schedule appointments with ease.'
  );
  ensureMeta({ property: 'og:url' }, canonicalUrl);
  ensureMeta({ property: 'og:image' }, imageUrl);
  ensureMeta({ property: 'og:image:alt' }, 'Al Nabi Hospital emblem in blue and white');
  ensureMeta({ property: 'place:location:latitude' }, '16.8276');
  ensureMeta({ property: 'place:location:longitude' }, '75.7154');
  ensureMeta({ name: 'twitter:title' }, title);
  ensureMeta({ name: 'twitter:description' },
    '24/7 medical support, specialist doctors, and patient-first care. Book your appointment with Al Nabi Hospital today.'
  );
  ensureMeta({ name: 'twitter:image' }, imageUrl);
  ensureMeta({ name: 'twitter:image:alt' }, 'Al Nabi Hospital emblem in blue and white');
  ensureMeta({ name: 'twitter:creator' }, '@AlNabiHospital');
  ensureMeta({ name: 'application-name' }, 'Al Nabi Hospital');
  ensureMeta({ name: 'apple-mobile-web-app-title' }, 'Al Nabi Hospital');
  ensureMeta({ name: 'mobile-web-app-capable' }, 'yes');
  ensureMeta({ name: 'geo.placename' }, 'Vijayapura, Karnataka');
  ensureMeta({ name: 'geo.position' }, '16.8276;75.7154');
  ensureMeta({ name: 'geo.region' }, 'IN-KA');
  ensureMeta({ name: 'ICBM' }, '16.8276, 75.7154');

  ensureLink('canonical', canonicalUrl);
  ensureLink('icon', '/assets/logo-32.png', { type: 'image/png', sizes: '32x32' });
  ensureLink('icon', '/assets/logo-192.png', { type: 'image/png', sizes: '192x192' });
  ensureLink('apple-touch-icon', '/assets/logo-192.png');
  ensureLink('alternate', canonicalUrl, { hreflang: 'en-IN' });
  ensureLink('alternate', canonicalUrl, { hreflang: 'x-default' });
};

bootstrapSEO();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
