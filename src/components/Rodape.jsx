import "./Rodape.css";

function Rodape() {
    const rodapeTitulo = "Contatos";
    const contato = "Telefone: (62)3222-3333";
    const email = "Email: contato@email.com";
    const linkImagem = "https://soulcode.com/assets/img/logo.png";

    return (
        <section className="rodape">
            <h3 className="titulo-rodape"> {rodapeTitulo}</h3>
            <p className="rodaP">
                {contato}
                <br />
                {email}
            </p>
            <div className="imgRodape">
            <img src={linkImagem} alt="SoulCode" />
            </div>
        </section>
    );
}

export default Rodape;