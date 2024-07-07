//Importante: importar para que os estilos do arquivo façam parte do projeto
import "./Mensagem.css";

function Mensagem(props) {
    // const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
    // const nomeAutor = "J. Almir";
    // const linkImagem = "https://picsum.photos/200";

    return (
        <section className = "mensagem-corpo">
            <h2 className = "mensagem-titulo">{props.textoTitulo}</h2>
            <div className="imgMensagem">
            <img src={props.linkImagem} alt="Imagem da Mensagem" />
            </div>
            <p className ="paragrafo">
                {props.paragrafo}
            </p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
    );
}

export default Mensagem;