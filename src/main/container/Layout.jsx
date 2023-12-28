import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden justify-start relative">
        <div className="absolute bottom-0 left-0 w-full bg-slate-500 z-10 md:static md:w-1/5 lg:w-1/6">
          <Sidebar />
        </div>
        <div className="w-full relative">
          <Navbar />
          <div className="w-full bg-neutral-400 p-4 h-full">{children}</div>
        </div>
      </div>
    </>
  );
};
