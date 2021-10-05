import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  let fullHeightMain = children ? `h-screen` : "",
    classNames = `pt-20 px-4 w-screen shadow-xl ${fullHeightMain}`;

  return (
    <>
      <Header />
      <main className={classNames}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
