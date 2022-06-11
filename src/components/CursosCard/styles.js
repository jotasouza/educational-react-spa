import styled from "styled-components";

export const CursoItemDiv = styled.div`
  padding: 15px;

  .curso__titulo {
    line-height: 2rem;
  }

  .matricula {
    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--color-icon);
    }
  }

  .licao,
  .estudantes,
  .avaliacao {
    font-size: 0.9rem;
    color: var(--color-title);
    font-weight: 500;

    i {
      font-weight: 400;
    }
  }
`;

export const ImgCursoDiv = styled.div`
  img {
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;
