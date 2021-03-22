import { Link, useLocation } from "react-router-dom";

function NavBar() {
  // const location = useLocation();
  // usar location.pathname.slice(1) para hacer el selected
  const pages = ['expenses', 'income']

  return (
    <nav>
      {pages.map(page => {
        return <Link key={page} to={`/${page}`}>{page}</Link>
      })}
    </nav>
  )
}

export default NavBar;