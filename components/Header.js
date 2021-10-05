import Link from "next/link";
import Button from "./common/Button";

const Header = ({ props }) => {
  return (
    <header className="fixed top-0 w-screen p-4 bg-white shadow" props>
      <div className="container mx-auto flex content-between items-center">
        <div id="header-brand">
          <Link href="/">
            <a className="font-bold text-2xl">Brand</a>
          </Link>
        </div>
        <span className="flex-grow"></span>
        <nav className="flex items-center gap-2">
          <Button asLink inverted href="/">
            Sign In
          </Button>
          <Button asLink href="/">
            Register
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
