import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden justify-start relative">
          <Sidebar />
        <div className="w-full relative">
          <Navbar />
          <div className="w-full p-4 h-full">{children}</div>
        </div>
      </div>
    </>
  );
};
