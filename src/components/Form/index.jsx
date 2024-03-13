import { useEffect, useState } from 'react';
import styles from './Form.module.css';

const Form = ({ handleResult }) => {
    
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [resultImc, setResultImc] = useState('');

    const calcImc = (e) => {
        e.preventDefault();
        handleResult(resultImc);
        clearFields();
    }
    
    const updateWeight = (e) => {
        if (e.target.value >= 1) {
            setWeight(e.target.value)
        }
    }
    
    const updateHeight = (e) => {
        if (e.target.value >= 1) {
            setHeight(e.target.value)
        }
    }
    
    useEffect(() => {
        setResultImc(((weight / (height * height)).toFixed(2)));
    }, [weight, height]);

    const clearFields = () => {
        setHeight('');
        setWeight('');
    }

    return (
        <div className='container'>
            <h1 className={styles.formText}>Cálculo IMC</h1>
            <hr />
            <p className={styles.formParagraph}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
            <p className={styles.formParagraph}>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
            <p className={styles.formParagraph}>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</p>

            <form className={styles.form} onSubmit={calcImc} >
                <div className={styles.formFields}>
                        <div className={styles.formCalcField}>
                        <label htmlFor="peso" className={styles.formLabel}>Peso (Ex: 65)</label>
                        <input
                            type="number"
                            className={styles.formInput}
                            placeholder='Quilos'
                            onChange={updateWeight}
                            value={weight}
                            min={1}
                            required
                        />
                        </div>
                        <div className={styles.formCalcField}>
                            <label htmlFor="altura" className={styles.formLabel}>Altura (Ex: 1,67)</label>
                            <input
                                type='number'
                                className={styles.formInput}
                                placeholder='Metros'
                                onChange={updateHeight}
                                value={height}
                                step='0.01'
                                min={1}
                                required
                            />
                        </div>
                        <div className={styles.formButtonsDiv}>
                            <button type="submit" className={styles.submitButton}>Calcular IMC </button>
                            <button type='reset' className={styles.resetButton} onClick={clearFields}>Limpar</button>
                        </div>
                </div>
            </form>
        </div>
    )
}


export default Form;