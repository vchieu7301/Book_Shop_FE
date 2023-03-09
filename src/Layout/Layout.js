import DashBoard from "./Dashboard";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <DashBoard />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
