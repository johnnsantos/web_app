import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #f8b13b;
  width: 100%;
  height: 6vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px #4c5557;
  position: fixed;
  top: 0;
`;

export const TitleBar = styled.div`
  width: 90%;
  font-size: 1.2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  color: #2d3537;
  svg {
    margin-right: 1%;
    font-size: 1.2rem;
  }
  a {
    display: flex;
    align-items: baseline;
    text-decoration: none;
    outline: none;
  }
  a:active,
  a:visited {
    color: inherit;
  }
  a:hover {
    color: #4c5557;
  }
`;
