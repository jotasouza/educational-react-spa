import { CursoItemDiv, ImgCursoDiv } from "./styles";

const CursosCard = (props) => {
  const { imgUrl, titulo, licao, estudantes, avaliacao } = props.item;

  return (
    <CursoItemDiv>
      <ImgCursoDiv>
        <img src={imgUrl} alt="Imagem Curso" className="w-100" />
      </ImgCursoDiv>

      <div className="curso__detalhes">
        <h6 className="curso__titulo mb-4">{titulo}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="licao d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {licao} Aulas
          </p>

          <p className="estudantes d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {estudantes}Mil
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="avaliacao d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {avaliacao}Mil
          </p>

          <button className="btn d-flex align-items-center gap-1">
            Inscreva-se
          </button>
        </div>
      </div>
    </CursoItemDiv>
  );
};

export default CursosCard;
