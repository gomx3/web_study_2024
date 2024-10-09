import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
import { LuClapperboard } from "react-icons/lu";

const Sidebar = () => {
    return (
        <Aside>
            <MenuItem>
                <FaSearch style={{ color: "white" }}/>
                <MenuLink to={'/search'}>찾기</MenuLink>
            </MenuItem>
            <MenuItem>
                <LuClapperboard style={{ color: "white" }}/>
                <MenuLink to={'/movies'}>영화</MenuLink>
            </MenuItem>
        </Aside>
    );
};

export default Sidebar;

const Aside = styled.aside`
    position: fixed;
    top: 77px;
    left: 0;
    width: 150px;
    height: 100%;
    background-color: #121212;
`
const MenuItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 15px;
    margin-left: 20px;
`
const MenuLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 7px 10px;
    margin-left: 7px;
    background-color: #121212;
    color: white;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #828282;
    }
`