import styled from "styled-components";

const Inputs = ({ type, register, placeholder, touched, error }) => {
  return (
    <>
      <StyledInput type={type} {...register} placeholder={placeholder} />
      {touched && <StyledErrorMsg>{error}</StyledErrorMsg>}
    </>
  );
};

export default Inputs;

const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
`;
const StyledErrorMsg = styled.p`
  margin: 0 10px;
  color: red;
  font-size: 13px;
`;
