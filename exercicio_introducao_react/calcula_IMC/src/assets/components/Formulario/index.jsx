import { useState } from "react";
import styles from "./Formulario.module.css";
import IMC from "../IMC";

const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imcEstaVisivel, setImcEstaVisivel] = useState(false);

  const resultado = () => {
    return (peso / Math.pow(altura, 2)).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.secaoForm}>
        <form className={styles.form}>
          <div className={styles.formContainer}>
            <label className={styles.formLabel} htmlFor="altura">
              Altura (ex: 1,70)
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="altura"
              placeholder="Metros"
              onBlur={({ target }) => setAltura(parseFloat(target.value))}
            />
          </div>
          <div className={styles.formContainer}>
            <label className={styles.formLabel} htmlFor="altura">
              Peso (ex: 69,2)
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="altura"
              placeholder="Quilos"
              onBlur={({ target }) => setPeso(parseFloat(target.value))}
            />
          </div>
        </form>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => setImcEstaVisivel(true)}
          >
            Calcular IMC
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setImcEstaVisivel(false);
              window.location.reload(true);
            }}
          >
            Limpar
          </button>
        </div>
      </div>
      {imcEstaVisivel && <IMC resultado={resultado()} />}
    </div>
  );
};

export default Formulario;
