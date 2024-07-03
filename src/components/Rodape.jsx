import "./Rodape.css";

function Rodape() {
    const rodapeTitulo = "Contatos";
    const contato = "Telefone: (62)3222-3333";
    const email = "Email: contato@email.com";
    const linkImagem = "https://soulcode.com/assets/img/logo.png";

    return (
        <footer className="rodape">
            <h3 className="titulo-rodape"> {rodapeTitulo}</h3>
            <p className="rodaP">
                {contato}
                <br />
                {email}
            </p>
            <div className="imgRodape">
            <img src={linkImagem} alt="SoulCode" />
            </div>
            ©2015-2024 Soulcode. Todos os direitos reservados.
        </footer>
    );
}

export default Rodape;