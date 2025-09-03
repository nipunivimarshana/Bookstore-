declare module './components/Header' {
  import { FC } from 'react';
  const Header: FC;
  export default Header;
}

declare module './components/Footer' {
  import { FC } from 'react';
  const Footer: FC;
  export default Footer;
}

declare module './components/BookCard' {
  import { FC } from 'react';
  interface BookCardProps {
    id: string | number;
    title: string;
    author: string;
    price: number;
    coverImage: string;
  }
  const BookCard: FC<BookCardProps>;
  export default BookCard;
}

declare module './pages/HomePage' {
  import { FC } from 'react';
  const HomePage: FC;
  export default HomePage;
}

declare module './pages/StorePage' {
  import { FC } from 'react';
  const StorePage: FC;
  export default StorePage;
}

declare module './pages/BookDetailPage' {
  import { FC } from 'react';
  const BookDetailPage: FC;
  export default BookDetailPage;
}
