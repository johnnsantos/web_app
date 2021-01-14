import styled from "styled-components";

export const Commander = styled.div`
  margin: 15px 0 15px;
  width: 70%;
  max-width: 880px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: 1px solid #f8b13b;
    border-radius: 3px;
    outline: none;
    background-color: transparent;
    color: #f8b13b;
    font-weight: bold;
    svg {
      margin-left: 3px;
      margin-right: 3px;
      font-size: 0.9rem;
    }
  }

  button:hover {
    background-color: #f8b13b;
    color: #4c5557;
    transition: all 0.3s ease-in-out;
  }

  .disable {
    border: 1px solid #899092;
    color: #8d9394;
    cursor: auto;
  }

  .disable:hover {
    background-color: transparent;
    color: #8d9394;
  }

  @media only screen and (max-width: 400px) {
    width: 95%;
    button {
      margin-right: 15px;
    }
  }
`;
