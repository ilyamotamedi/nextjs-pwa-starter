import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, ...props }) => {
  let fullHeightMain = children ? `h-screen` : "",
    mainClassNames = `px-4 pt-16 w-full ${fullHeightMain}`

  return (
    <>
      <Header color={props.color} />
      <main className={mainClassNames}>{children}</main>
      <Footer color={props.color} />
    </>
  )
}

export default Layout
