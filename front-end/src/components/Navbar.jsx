import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { phone } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const BOX = styled.div`
  height: 60px;
  ${phone({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${phone({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${phone({ display: "none" })}
`;

const SearchBOX = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${phone({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${phone({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${phone({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${phone({ fontSize: "12px", marginLeft: "10px" })}
`;




const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <BOX>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchBOX>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchBOX>
        </Left>
        <Center>
          <Logo>FASHION STORE</Logo>
        </Center>
        <Right>
        <Link to ="/register"><MenuItem className="btn btn-outline-success">REGISTER</MenuItem></Link>
          <Link to ="/login"><MenuItem className="btn btn-outline-success">SIGN IN</MenuItem></Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </BOX>
  );
};

export default Navbar;
