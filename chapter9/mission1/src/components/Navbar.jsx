import styled from "styled-components";
import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart)
  return (
    <nav>
      <NavContainer>
        <h3>👻👻👻</h3>
        <div>
            <CartIcon />
            <div>
                <p>{amount}</p>
            </div>
        </div>
      </NavContainer>
    </nav>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`