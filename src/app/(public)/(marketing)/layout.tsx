import Footer from "@/components/layout/public/footer";
import Header from "@/components/layout/public/header";
import type { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className= "flex-1">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default layout;
