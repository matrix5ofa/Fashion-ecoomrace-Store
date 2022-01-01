import styled from "styled-components";

const BOX = styled.div`
  height: 29px;
  background-color: #4b693d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <BOX>NICE OFFERS! Today our Sale over 30$</BOX>;
};

export default Announcement;
