import styled from "styled-components";

export const HeroContentDiv = styled.div`
  padding-top: 1rem;
  h1 {
    font-size: 3rem;
    font-weight: 600;
    line-height: 55px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 35px;
  }
`;

export const SearchDiv = styled.div`
  width: 60%;
  border: 1px solid var(--color-search);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  margin-top: 20px;
  padding: 0px 7px;

  input {
    border: none;
    outline: none;
    padding: 3px 10%;

    ::placeholder {
      color: var(--color-placeholder);
    }
  }
`;
