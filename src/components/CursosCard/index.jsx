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
            <i class="ri-book-open-line"></i> {licao} Lessons
          </p>

          <p className="estudantes d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {estudantes}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="avaliacao d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {avaliacao}K
          </p>

          <p className="matricula d-flex align-items-center gap-1">
            <a href="#ins">Inscreva-se</a>
          </p>
        </div>
      </div>
    </CursoItemDiv>
  );
};

export default CursosCard;
