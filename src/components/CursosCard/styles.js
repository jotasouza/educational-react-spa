import styled from "styled-components";

export const CursoItemDiv = styled.div`
  padding: 15px;
  background: var(--background-color-card);
  border-radius: 10px;
  margin-bottom: 1.5rem;

  .curso__titulo {
    line-height: 2rem;
  }

  .licao,
  .estudantes,
  .avaliacao {
    font-size: 1rem;
    color: var(--color-title);
    font-weight: 500;

    i {
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
`;

export const ImgCursoDiv = styled.div`
  img {
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;
