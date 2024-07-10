import { useState } from "react";

function CalculadoraImc() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    //Dentro do evento tem informações sobre o input
    function handlePeso(evento) {
        const input = evento.target;
        const valor = input.value;

        setPeso(valor);
    }
    function handleAltura(evento) {
        const input = evento.target;
        const valor = input.value;

        setAltura(valor);
    }
    function handleCalculaImc(){
        const resultado = peso/altura ** 2;
        setImc(resultado.toFixed(2));
    }

    return (
        <section>
            <h3>Calculadora IMC</h3>
            <input 
                type="number" 
                placeholder="Digite seu peso"
                onChange={handlePeso}
            />
            <br />
            <input 
                type="number" 
                placeholder="Digite sua altura"
                onChange={handleAltura}
            />
            <br />
            <button onClick={handleCalculaImc}>Calcular</button>
            <hr />
            <h4>Seu IMC é: {imc}</h4>
        </section>
    );
}

export default CalculadoraImc;