import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import colors from "../UI/colors";

function NavBar() {
  const location = useLocation();
  const pages = ["expenses", "income"];

  return (
    <nav>
      <StyledList>
        {pages.map((page) => {
          return (
            <li key={page}>
              <Link
                className={
                  page === location.pathname.slice(1) ? "selected" : ""
                }
                to={`/${page}`}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </StyledList>
    </nav>
  );
}

export default NavBar;

const StyledList = styled.ul`
  display: flex;

  & li {
    padding: 0 4px;
  }

  & a {
    font-family: "Inter";
    text-transform: capitalize;
    color: ${colors.gray4};
    padding-bottom: 8px;
    border-bottom: 2px solid ${colors.gray4};
  }

  & .selected {
    color: ${colors.gray2};
    border-bottom: 2px solid ${colors.blue1};
  }
`;
