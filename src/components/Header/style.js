import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #f8b13b;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px #d3d3d3;
  margin-bottom: 3vh;
`;

export const TitleBar = styled.div`
  width: 70%;
  max-width: 1200px;

  img {
    width: 15%;
    max-width: 130px;
    margin: 10px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 120px;
    }
  }
`;
