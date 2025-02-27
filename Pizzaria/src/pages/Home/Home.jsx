
import IMG1 from '../../imagens/Caroueselimg/pizza-4741312_1280.jpg'
import IMG2 from '../../imagens/Caroueselimg/eat-1237431_1280.jpg'
import IMG3 from'../../imagens/Caroueselimg/batarta.jpg'
import { useState } from "react";
import "./Home.css";
function HOME() {
  const [ativo, setAtivo] = useState(0);

  const slides = [
    {
      titulo: " Pizza + refrigerante ",
      conteudo: <img src={IMG2} alt="" />,
    },
    { titulo: "Pizza + Batata Frita", conteudo: <img src={IMG3} alt="" /> },
    {
      titulo: "Pizza Salgada + Pizza Doce",
      conteudo: <img src={IMG1} alt="" />,
    },
  ];
  const proximoSlide = () => {
    setAtivo((ativo + 1) % slides.length);
  };

  const slideAnterior = () => {
    setAtivo((ativo - 1 + slides.length) % slides.length);
  };
  return (
    
        <div className="box">
      <h2>{slides[ativo].titulo}</h2>
      <p>{slides[ativo].conteudo}</p>
      <div className="botoes">
        <button onClick={slideAnterior}>Anterior</button>
        <button onClick={proximoSlide}>Próximo</button>
      </div>
      </div>
    
  );
}

export default HOME;
