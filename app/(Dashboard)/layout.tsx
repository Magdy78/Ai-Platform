import Navbar from "@/components/navbar";




const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // const apiLimitCount = await getApiLimitCount();
  // const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        {/* <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
        <div>Hello SideBar</div>
      </div>
      {/* This part is pushed outside */}
      <main className="md:pl-72">{children}
      <Navbar></Navbar>
      
      </main>
    </div>
  );
};

export default DashboardLayout;
