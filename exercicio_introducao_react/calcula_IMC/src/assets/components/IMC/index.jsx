import styles from "./Imc.module.css";

const IMC = ({resultado}) => {
  

  return (
    <div className={styles.secaoImc}>
      <span className={styles.resultado}>Seu IMC: {resultado}</span>
      <table className={styles.tabelaImc}>
        <thead>
          <tr>
            <td colSpan={2}>VEJA A INTERPRETAÇÃO DO IMC</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>IMC</td>
                <td>Classificação</td>
            </tr>
            <tr>
                <td>Menor que 18,5</td>
                <td>Abaixo do peso</td>
            </tr>
            <tr>
                <td>Entre 18,5 e 24,9</td>
                <td>Normal</td>
            </tr>
            <tr>
                <td>Entre 25 e 29,9</td>
                <td>Sobrepeso</td>
            </tr> 
            <tr>
                <td>Entre 30 e 39,9</td>
                <td>Obesidade</td>
            </tr>
            <tr>
                <td>Maior que 40</td>
                <td>Obesidade mórbida</td>
            </tr>            
        </tbody>
      </table>
    </div>
  );
};

export default IMC;
