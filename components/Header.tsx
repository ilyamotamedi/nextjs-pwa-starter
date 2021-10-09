import Link from "next/link"

const Header = ({ ...props }) => {
  const baseColor: String = props.color || "blue"

  return (
    <header
      className="fixed top-0 z-50 w-screen px-4 py-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur ring-1 ring-black ring-opacity-25"
      {...props}
    >
      <div className="container mx-auto flex content-between items-center">
        <div id="header-brand">
          <Link href="/">
            <a className={`font-bold text-2xl text-${baseColor}-500`}>Brand</a>
          </Link>
        </div>
        <span className="flex-grow"></span>
        <nav className="flex items-center gap-2"></nav>
      </div>
    </header>
  )
}

export default Header
