import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  let fullHeightMain = children ? `h-screen` : "",
    mainClassNames = `px-4 pt-16 w-full ${fullHeightMain}`

  return (
    <>
      <Header />
      <main className={mainClassNames}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
