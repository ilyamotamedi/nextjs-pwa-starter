import Link from "next/link"
import Dropdown from "./common/DropdownMenu"
import AuthButton from "./header/AuthButton"

const Header = ({ ...props }) => {
  return (
    <header
      className="fixed top-0 z-50 w-screen px-4 py-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur ring-1 ring-black ring-opacity-25"
      props
    >
      <div className="container mx-auto flex content-between items-center">
        <div id="header-brand">
          <Link href="/">
            <a className="font-bold text-2xl">Brand</a>
          </Link>
        </div>
        <span className="flex-grow"></span>
        <nav className="flex items-center gap-2">
          <AuthButton />
        </nav>
      </div>
    </header>
  )
}

export default Header
