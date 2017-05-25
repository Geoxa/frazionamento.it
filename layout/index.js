import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twitter from '../components/Twitter';

export default ({ title, children }) => (
  <div
    itemscope
    itemtype="http://schema.org/LocalBusiness"
  >
    <Head>
      <link rel="preload" href="/_next/-/page/contatti" as="script" />
      <link rel="preload" href="/_next/-/page/_error/index.js" as="script" />
      <link rel="preload" href="/_next/-/manifest.js" as="script" />
      <link rel="preload" href="/_next/-/commons.js" as="script" />
      <link rel="preload" href="/_next/-/main.js" as="script" />
      <meta charset="utf-8" class="next-head" />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <Header />
    <div id="content">
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <aside id="sidebar">
        <Twitter />
      </aside>
    </div>
    <Footer />
  </div>
)