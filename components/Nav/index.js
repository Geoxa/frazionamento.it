import React from 'react';
import Link from 'next/link'
import nextConfig from '../../next.config';

const routes = nextConfig.exportPathMap();

const menu = [
  '/',
  '/chi-siamo',
  '/servizi',
  '/casi',
  '/contatti',
  '/links',
].map((ref) => (
  <li key={ref}>
    <Link href={routes[ref].page}>
      <a>{routes[ref].title}</a>
    </Link>
  </li>
));

export default () => (
  <nav>
    <ul>{menu}</ul>
  </nav>
)
