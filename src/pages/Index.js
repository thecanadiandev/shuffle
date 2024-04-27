import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersWhitePattern1 from '../components/headers-white-pattern/IndexSectionHeadersWhitePattern1';
import IndexSectionFeaturesWhitePattern2 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern2';
import IndexSectionLogoCloudsWhitePattern3 from '../components/logo-clouds-white-pattern/IndexSectionLogoCloudsWhitePattern3';
import IndexSectionTestimonialsWhitePattern4 from '../components/testimonials-white-pattern/IndexSectionTestimonialsWhitePattern4';
import IndexSectionBlogPostsWhitePattern5 from '../components/blog-posts-white-pattern/IndexSectionBlogPostsWhitePattern5';
import IndexSectionFaqsWhitePattern6 from '../components/faqs-white-pattern/IndexSectionFaqsWhitePattern6';
import IndexSectionContactsWhitePattern7 from '../components/contacts-white-pattern/IndexSectionContactsWhitePattern7';
import IndexSectionFootersWhitePattern8 from '../components/footers-white-pattern/IndexSectionFootersWhitePattern8';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersWhitePattern1 />
      <IndexSectionFeaturesWhitePattern2 />
      <IndexSectionLogoCloudsWhitePattern3 />
      <IndexSectionTestimonialsWhitePattern4 />
      <IndexSectionBlogPostsWhitePattern5 />
      <IndexSectionFaqsWhitePattern6 />
      <IndexSectionContactsWhitePattern7 />
      <IndexSectionFootersWhitePattern8 />
    </React.Fragment>
  );
}

