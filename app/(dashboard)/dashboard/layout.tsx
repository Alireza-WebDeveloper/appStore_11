import SideBar from '../components/SideBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="grid grid-cols-6 min-h-screen">
        <section className="col-span-1">
          <SideBar />
        </section>
        <section className="col-span-5">
          <div className="pl-2">{children}</div>
        </section>
      </div>
    </>
  );
};

export default DashboardLayout;
