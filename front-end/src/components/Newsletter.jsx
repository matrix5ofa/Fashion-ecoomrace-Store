import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { phone } from "../responsive";

const BOX = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${phone({ textAlign: "center" })}

`;

const InputBOX = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${phone({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <BOX>
      <Title>New Style.</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputBOX>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputBOX>
    </BOX>
  );
};

export default Newsletter;