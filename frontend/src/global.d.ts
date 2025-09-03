declare module '*.jsx' {
  import { ComponentType } from 'react';
  const component: ComponentType<any>;
  export default component;
}

declare module './components/Header';
declare module './components/Footer';
declare module './components/BookCard';
declare module './pages/HomePage';
declare module './pages/StorePage';
declare module './pages/BookDetailPage';
