import styled from "styled-components";
import { categories } from "../data";
import { phone } from "../responsive";
import CategoryItem from "./CategoryItem";

const BOX = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${phone({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <BOX>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </BOX>
  );
};

export default Categories;
