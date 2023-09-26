import SideBar from '@/components/ui/SideBar';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col-reverse gap-4 lg:flex-row'>
      <SideBar />
      <main className='lg:basis-[80%]'>{children}</main>
    </div>
  );
}

export default AppLayout;
