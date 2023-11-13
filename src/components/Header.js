import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { mainColors } from "../style/GlobalStyled";

const Sheader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${mainColors.pointColor};
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 50px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </Sheader>
  );
};
