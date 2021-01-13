import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const StyledTable = styled.table`
  font-family: "Courier New", Courier, monospace;
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f8f8;
  box-shadow: 1px 1px 15px #d3d3d3;
  border-radius: 5px;
  th {
    padding: 20px;
    font-weight: bold;
    border-bottom: 1px solid #c4c4c4;
    svg {
      margin-right: 3px;
    }
  }
  td {
    padding: 1%;
    text-align: center;
  }

  button {
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #f8b13b;
    border-radius: 3px;
    outline: none;
    background-color: transparent;
    color: #f8b13b;
    font-weight: bold;
    svg {
      margin-left: 3px;
      font-size: 0.9rem;
    }
  }

  button:hover {
    background-color: #f8b13b;
    color: #4c5557;
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100vw;
  }
`;
