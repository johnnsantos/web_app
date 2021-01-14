import styled from "styled-components";

export const MainCard = styled.div`
  font-family: "Courier New", Courier, monospace;
  background-color: #f1f1f1;
  width: 60%;
  border-radius: 10px;
  box-shadow: 1px 1px 15px #d3d3d3;

  .header {
    padding: 10px;
    background-color: #f8b13b;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    img {
      margin-right: 20px;
      width: 10%;
      border-radius: 100%;
    }
    span {
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .button-area {
    width: 35%;
  }

  .contents {
    margin: 5% auto;
    width: 80%;

    ul li {
      margin: 15px;
      font-weight: bold;
    }

    svg {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }

  .map-content {
    width: 80%;
    margin: 25px auto 25px;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  button {
    border: 1px solid #2d3537;
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    background-color: transparent;
    margin: 10px 0 0 10px;
    font-weight: bold;
    svg {
      margin-right: 5px;
    }
  }

  button:hover {
    background-color: #2d3537;
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;
