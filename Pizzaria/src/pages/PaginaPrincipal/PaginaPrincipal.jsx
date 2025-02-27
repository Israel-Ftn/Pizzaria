import "./PaginaPrincipal.css";
import Pizza1 from "../../imagens/pizzas/1.jpg";
import Pizza2 from "../../imagens/pizzas/2.jpg";
import Pizza3 from "../../imagens/pizzas/3.jpg";
import Pizza4 from "../../imagens/pizzas/4.jpg";
import Pizza5 from "../../imagens/pizzas/5.jpg";
import Pizza6 from "../../imagens/pizzas/6.jpg";
import Pizza7 from "../../imagens/pizzas/7.jpg";
import Pizza8 from "../../imagens/pizzas/8.jpg";
import Pizza9 from "../../imagens/pizzas/9.jpg";
import Pizza10 from "../../imagens/pizzas/10.jpg";

function PaginaPrincipal() {
  return (
    <div className="container">
      <div className="card">
        <img className="img1" src={Pizza1} alt="" />
        <div className="button">
          <p>Pizza Sabor Alho E Olho com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1"src={Pizza2} alt="" />

        <div className="button">
          <p>Pizza Sabor Portuguesa com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza3} alt="" />
        <div className="button">
        <p>Pizza Sabor Calabreza
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza4} alt="" />
        <div className="button">
        <p>Pizza Sabor 4 Queijos
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza5} alt="" />
        <div className="button">
        <p>Pizza Sabor Portuguesa
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza6} alt="" />
        <div className="button">
        <p>Pizza Sabor Frango 
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza7} alt="" />
        <div className="button">
        <p>Pizza Sabor Costela
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza8} alt="" />
        <div className="button">
        <p>Pizza Sabor Vegetariana
         sem borda </p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza9} alt="" />
        <div className="button">
        <p>Pizza Sabor Palmito
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      <div className="card">
        <img className="img1" src={Pizza10} alt="" />
        <div className="button">
        <p>Pizza Sabor Bacon com Brócolis
        com borda Rechada:Cheeder ou Catupiry</p>
          <button className="botao1">Comprar Agora</button>
        </div>
      </div>
      
    </div>
  );
}

export default PaginaPrincipal;
