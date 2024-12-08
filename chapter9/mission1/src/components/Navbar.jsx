import styled from "styled-components";
import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <NavContainer>
        <TitleBox>your ... ☠️</TitleBox>
        <div style={{ position: "absolute", top: "15px", right: "60px"}}>
          <AmountWrapper>
            <AmountText>{amount}</AmountText>
          </AmountWrapper>
          <CartIcon />
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
  background: linear-gradient(to top, #eee, 30%,  white);
`;
const TitleBox = styled.h2`
  display: flex;
  align-items: center;
  padding: 15px 50px;
`;
const AmountWrapper = styled.div`
  position: relative;
  left: 12px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  padding: 5px;
  border-radius: 17px;
  background-color: #ddd;
`;
const AmountText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
