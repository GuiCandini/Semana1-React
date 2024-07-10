import { useState } from "react";
import "../Contador/Contador.css";

function Contador({valorInicial = 0}) {
    //Para definir um estado usamos: useState
    //useState -> estado, função para alterar este estado
    //useStates -> react hooks
    const [numero, setNumero] = useState(valorInicial);
    
    function handleIncremento() {
        //Indica ao componente que ele deve atualizar para corresponder a mudança do estado
        setNumero(numero + 1);
        console.log("incremento", numero);
    }
    function handleDecremento() {
        if(numero > 0) {
            setNumero(numero - 1);
        }
    }
    function handleIncremento100() {
        //Indica ao componente que ele deve atualizar para corresponder a mudança do estado
        setNumero(numero + 100);
    }
    function handleDecremento100() {
        //Indica ao componente que ele deve atualizar para corresponder a mudança do estado
        if(numero > 100) {
            setNumero(numero - 100);
        }
    }
    function handleZerar() {
        setNumero(0);
    }


    return (
        <section>
            <h2 className={numero % 2 == 0 ? "par" : "impar"} >Contagem:{numero}</h2>
            <button onClick={handleIncremento}>+1</button>
            <button onClick={handleDecremento}>-1</button>
            <button onClick={handleIncremento100}>+100</button>
            <button onClick={handleDecremento100}>-100</button>
            <button onClick={handleZerar}>Zerar</button>
        </section>
    );
}

export default Contador;

//Para que o número mude, o contador precisa renderizar novamente.
//Estado -> variavel especial que sincroniza as mudanças na tela