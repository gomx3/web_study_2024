import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
import { LuClapperboard } from "react-icons/lu";

const Sidebar = () => {
  return (
    <Aside>
      <MenuItem>
        <FaSearch style={{ color: "white" }} />
        <MenuLink to={"/search"}>찾기</MenuLink>
      </MenuItem>
      <MenuItem>
        <LuClapperboard style={{ color: "white" }} />
        <MenuLink to={"/movies"}>영화</MenuLink>
      </MenuItem>
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  position: fixed;
  top: 97px;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #121212;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7px;
  margin-left: 30px;
  &:hover {
    background-color: #828282;
  }
`;
const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 25px;
  padding: 7px 10px;
  margin-left: 7px;
  color: white;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 15px;
  transition: background-color 0.3s ease;
`;
