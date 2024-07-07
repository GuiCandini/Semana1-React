import "./Produto.css"

function Produto(props) {
    let resultDesc = props.precoUnit - props.precoUnit * (props.desconto/100);

    return (
        <section className="produto-corpo">
            <h3 className="titulo-produto">Produto</h3>
                <p>{props.nomeProd}</p>
                {props.desconto > 0 && <p className="preco">R$ {props.precoUnit}</p>}
                {props.desconto > 0 ? <h4>R$ {resultDesc.toFixed(2)}</h4> : <h4>R${props.precoUnit}</h4>}
                {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
        </section>
    );
}

export default Produto;