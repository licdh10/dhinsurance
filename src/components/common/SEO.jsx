import React, { useEffect } from 'react';
import { businessConfig } from '../../config/businessConfig';

export const SEO = ({ title, description, path = '' }) => {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${businessConfig.name}` 
      : businessConfig.seo.defaultTitle;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || businessConfig.seo.defaultDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || businessConfig.seo.defaultDescription);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${businessConfig.seo.siteUrl}${path}`);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, path]);

  return null;
};

export default SEO;
