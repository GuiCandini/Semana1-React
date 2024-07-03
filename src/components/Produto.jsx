import "./Produto.css"

function Produto(props) {
    let resultado = props.precoUnit - props.precoUnit * (props.desconto/100);

    return (
        <section className="produto-corpo">
            <h3 className="titulo-produto">Produto</h3>
            <div className="divImg">
                <img className="playImg" src="https://m.media-amazon.com/images/I/51rzWirXO4L.jpg" alt="Playstation5" />
            </div>
            <ul className="lista">
                <li>{props.nomeProd}</li>
                {<li>de: R${props.precoUnit}</li>}
                <li>por: R${resultado.toFixed(2)}</li>
            </ul>
        </section>
    );
}

export default Produto;