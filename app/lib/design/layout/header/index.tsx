import LinkContainer from '../../common/link-container';
import Title from '../../common/title';

import Cart from '../../common/cart';
import SearchBar from './searchbar';
import Logo from '../../common/logo';
import Profile from '../../common/profile';
import CartButton from './cart-button';

const Header = () => {
  return (
    <header className="w-full bg-black/90 backdrop-blur-md p-6 z-20  flex flex-col gap-10 text-white">
      <section className="flex items-center justify-around">
        <div className="flex items-center gap-4">
          <Profile />
          <span className="w-[1px] h-7 bg-white"></span>
          <CartButton />
        </div>
        <section className="flex gap-10 items-center">
          <div className="flex gap-6">
            <LinkContainer href={'/'}>صفحه اصلی</LinkContainer>
            <LinkContainer href={'/product'}>محصولات</LinkContainer>
            <LinkContainer href={'/'}>وبلاگ</LinkContainer>
            <LinkContainer href={'/'}>فروشگاه</LinkContainer>
            <LinkContainer href={'/'}>درباره ما</LinkContainer>
            <LinkContainer href={'/'}>تماس با ما</LinkContainer>
          </div>
        </section>
        <SearchBar />
        <LinkContainer href={'/'} className="flex items-center gap-2">
          <Title className="text-white" level={3}>
            سایت آماده فروشگاه لوازم خانگی
          </Title>
          <Logo className="w-8 h-8" />
        </LinkContainer>
      </section>
    </header>
  );
};

export default Header;
