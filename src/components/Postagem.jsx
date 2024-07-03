import "./Postagem.css";

function Postagem(props) {

    return (
        <article className = "postagem-corpo">
            <h2 className = "postagem-titulo">{props.titulo}</h2>
            <img src= {props.linkImg} alt={props.legenda} className="imagem"/>
            <p className ="par">
                {props.desc}
            </p>
            <small>Postado por: Guilherme</small>
        </article>
    );
}

export default Postagem;