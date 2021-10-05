import Link from "next/Link";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-blue-900 text-white">
      <div className="container mx-auto">
        <div className="flex items-start md:items-center justify-between">
          <div id="footer-brand" className="font-bold text-2xl">
            Brand
          </div>
          <span className="flex-grow"></span>
          <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-8 font-bold">
            <Link href="/">
              <a className="text-white hover:text-white">Home</a>
            </Link>
            <Link href="/">
              <a className="text-white hover:text-white">About</a>
            </Link>
            <Link href="/">
              <a className="text-white hover:text-white">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
