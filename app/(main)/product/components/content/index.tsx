import MainContent from './main-content';
import SideBarContent from './sidebar-content';

const Main = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-10">
      <SideBarContent className="xl:col-span-3 col-span-12" />
      <MainContent className="xl:col-span-9  col-span-12" />
    </div>
  );
};

export default Main;
