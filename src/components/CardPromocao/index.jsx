/* eslint-disable react/prop-types */
import "./styles.css"

const CardPromocao = ({
    fotoUrl,
    nome,
    Valor,
    Promocao,
  }) => {
    return (
      <div className="card">
        <img src={fotoUrl} alt="foto do produto" />
  
        <div className="container">
          <h4>{nome}</h4>
  
          <p>
            <b>Valor: </b>
            {Valor}
          </p>
  
          <p>
            <b>Promocao: </b>
            {Promocao}
          </p>
        </div>
      </div>
    );
  };
  

export default CardPromocao;