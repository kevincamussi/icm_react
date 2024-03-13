import { startTransition, useEffect, useState } from 'react';
import styles from './Result.module.css';

const Result = ({result}) => {

    const [nivelImc, setNivelImc] = useState({
        magreza: false,
        normal: false,
        sobrepeso:false,
        obesidade: false,
        obesidadeGrave: false
    })
    
    
useEffect(() => {
    if (result < 18.5) {
        setNivelImc({magreza:true});
    } 
    else if (result >= 18.5 && result < 24.9) {
        setNivelImc({normal:true});
    } 
    else if (result > 24.9 && result < 29.9) {
        setNivelImc({sobrepeso:true});
    } 
    else if (result > 29.9 && result < 39.9) {
        setNivelImc({obesidade:true});
    } 
    else if(result > 40) {
        setNivelImc({obesidadeGrave:true})
    }
}, [result]);
    
    return (
            <div className='container'>
                
                <p className={styles.result}>Seu IMC é: {result} </p>
                <table className={styles.table}  cellSpacing="0" >
                    <thead> 
                        <tr>
                            <th>IMC</th>
                            <th>CLASSIFICAÇÃO</th>
                            <th>GRAU DE OBESIDADE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={nivelImc.magreza ? styles.resultColor : styles.normalColor}>
                            <td>MENOR QUE 18,5</td>
                            <td>MAGREZA</td>
                            <td>0</td>
                        </tr>
                        <tr className={nivelImc.normal ? styles.resultColor : styles.normalColor}>
                            <td>ENTRE 18,5 E 24,9</td>
                            <td>NORMAL</td>
                            <td>0</td>
                        </tr>
                        <tr className={nivelImc.sobrepeso ? styles.resultColor : styles.normalColor}>
                            <td>ENTRE 25,0 E 29,9</td>
                            <td>SOBREPESO</td>
                            <td>I</td>
                        </tr>
                        <tr className={nivelImc.obesidade ? styles.resultColor : styles.normalColor}>
                            <td>ENTRE 30,0 E 39,9</td>
                            <td>OBESIDADE</td>
                            <td>II</td>
                        </tr>
                        <tr className={nivelImc.obesidadeGrave ? styles.resultColor : styles.normalColor}>
                            <td>MAIOR QUE 40,0	</td>
                            <td>OBESIDADE GRAVE	</td>
                            <td>III</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )

}

export default Result;