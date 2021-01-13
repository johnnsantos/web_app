import styled from "styled-components";

export const MainCard = styled.div`
  font-family: "Courier New", Courier, monospace;
  background-color: #f1f1f1;
  width: 50vw;
  height: 40vh;
  border-radius: 10px;
  box-shadow: 1px 1px 15px #d3d3d3;

  .header {
    padding: 10px;
    background-color: #f8b13b;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 20px;
      width: 10%;
      border-radius: 100%;
    }
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .contents {
    margin: 5% auto;
    width: 80%;
  }
`;
