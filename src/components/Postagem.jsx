import "./Postagem.css";

function Postagem() {
    const tituloPost = "Imagens Aleatórias";
    const nomeSite = "Picsum photos";
    const linkImg = "https://picsum.photos/250";

    return (
        <section className = "postagem-corpo">
            <h2 className = "postagem-titulo">{tituloPost}</h2>
            <img src={linkImg} alt="Imagem da Mensagem" />
            <p className ="par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eligendi?
            </p>
            <small>Postado por: {nomeSite}</small>
        </section>
    );
}

export default Postagem;