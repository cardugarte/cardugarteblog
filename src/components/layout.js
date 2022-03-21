import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading text-center text-5xl font-bold font-mono">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="font-sans text-gray-500">
        © {new Date().getFullYear()}. El blog de cardugarte, hecho con 💖 a fin de compartir ideas, conocimientos y experiencias.
        {` `}
        <a className="link__footer" href="https://www.carlosdugarte.com">Visita mi web.</a>
      </footer>
    </div>
  )
}

export default Layout
