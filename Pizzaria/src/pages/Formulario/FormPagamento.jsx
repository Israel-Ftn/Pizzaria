import { useState } from "react";
import './Formulario.css'
function FormPagamento() {
  const [rua, SetRua] = useState("");
  const [numero, SetNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validandoPedido = (rua, numero, complemento, nome) => {
    if (rua === "" || numero === "" || complemento === "" || nome === "") {
      return {
        valido: false,
        mensagem: "Preencha corretamente os Campos acima",
      };
    }

    return { valido: true, mensagem: "Pedido Realizado.. Efetue o pagamento!" };
  };
  const Proximapg = (e) => {
    e.preventDefault();
    const resultado = validandoPedido(rua, numero, complemento, nome);
    setMensagem(resultado.mensagem);
    if (resultado.valido) {
      window.location.href = "/";
    }
  };
  return (
    <div className="container5">
      <h2>Preencha seu Endereço</h2>
      <form onSubmit={Proximapg}>
        {" "}
        <input
          type="text"
          value={rua}
          placeholder="  Digite o nome da rua "
          onChange={(e) => SetRua(e.target.value)}
        />
        <input
          type="number"
          value={numero}
          placeholder="  Digite o número da Residência "
          onChange={(e) => SetNumero(e.target.value)}
        />
        <input
          type="text"
          value={complemento}
          placeholder="  Digite um complemento "
          onChange={(e) => setComplemento(e.target.value)}
        />
        <input
          type="text"
          value={nome}
          placeholder="  Digite o Nome De Quem Receberá "
          onChange={(e) => setNome(e.target.value)}
        />
        <button>Fezer Pedido</button>
         <h5>{mensagem}</h5>
      </form>
      <hr />
    </div>
  );
}

export default FormPagamento;
