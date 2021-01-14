import styled from "styled-components";

export const TableList = styled.div`
  box-shadow: 1px 1px 15px #d3d3d3;
  border-radius: 5px;
  font-family: "Courier New", Courier, monospace;

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

  .filter-btn {
    cursor: pointer;
  }

  button:hover {
    background-color: #f8b13b;
    color: #4c5557;
    transition: all 0.3s ease-in-out;
  }

  .list ul:nth-child(odd) {
    background-color: #f1f1f1;
  }

  .list ul:nth-child(even) {
    background-color: #fff;
  }

  /* ---------bg---------*/
  @media screen and (min-width: 600px) {
    .list {
      display: table;
      margin: 1em;
    }

    .list ul {
      display: table-row;
    }

    .list ul:first-child li {
      background-color: #f8b13b;
      font-weight: bold;
      color: #2d3537;
      text-align: center;
      padding: 15px;
      svg {
        margin-right: 5px;
        font-size: 1rem;
      }
    }

    .list ul > li {
      display: table-cell;
      padding: 0.5em 1em;
      text-align: center;
    }
  }

  /* ---------sm--------- */
  @media screen and (max-width: 599px) {
    .list ul {
      border: solid 1px #ccc;
      display: block;
      list-style: none;
      margin: 1em;
      padding: 0.5em 1em;
    }

    .list ul:first-child {
      display: none;
    }

    .list ul > li {
      display: block;
      padding: 0.25em 0;
    }

    .list ul:nth-child(odd) > li + li {
      border-top: solid 1px #ccc;
    }

    .list ul:nth-child(even) > li + li {
      border-top: solid 1px #eee;
    }

    .list ul > li:before {
      color: #000;
      content: attr(data-label);
      display: inline-block;
      font-size: 75%;
      font-weight: bold;
      text-transform: capitalize;
      vertical-align: top;
      width: 50%;
    }

    .list button {
      margin: -1em 0 0 50%;
    }
  }

  /* ---------xsm--------- */
  @media screen and (max-width: 349px) {
    .list ul > li:before {
      display: block;
    }

    .list button {
      margin: 0;
    }
  }
`;
