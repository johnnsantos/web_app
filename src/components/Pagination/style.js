import styled from "styled-components";

export const Commander = styled.div`
  margin-top: 15px;
  width: 70%;
  max-width: 880px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
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
`;
