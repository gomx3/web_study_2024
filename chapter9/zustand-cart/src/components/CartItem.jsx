import styled from "styled-components";
import { ChevronDown, ChevronUp } from "../constants/icons";
import useCartStore from "../store/cartStore";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const { increase, decrease, removeItem } = useCartStore();
  
  return (
    <ArticleContainer>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <img src={img} width="100px" height="100px" alt={`${title} 이미지`} />
        <DetailBox>
          <TextBox>
            {title} | {singer}
          </TextBox>
          <TextBox className="price">\{price}</TextBox>
        </DetailBox>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <AmountBtn onClick={() => increase(id)}>
          <ChevronUp />
        </AmountBtn>
        <p>{amount}</p>
        <AmountBtn
          onClick={() => {
            if (amount === 1) {
              removeItem(id);
              return;
            }
            decrease(id);
          }}
        >
          <ChevronDown />
        </AmountBtn>
      </div>
    </ArticleContainer>
  );
};

export default CartItem;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  width: 80vw;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`
const TextBox = styled.h4`
  margin: 7px 0;
  font-weight: 500;
`
const AmountBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`