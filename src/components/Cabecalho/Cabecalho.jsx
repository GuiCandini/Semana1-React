import "../Cabecalho/Cabecalho.css"

function Cabecalho(props) {

    return (
        <header className="cabecalho">
            <img width="60" src="https://acaimadruga.com.br/wp-content/uploads/2023/12/logo-tpv.png"/>
            <p className="pCab">{props.login ? `Bem-vindo, ${props.user}!` : `Realize seu login`}</p>
            <nav className="navHeader">
                <a href="#">Home</a>
                <a href="#">Cardápio</a>
                <a href="#">Sobre</a>
                {!props.login && <button onClick={function handleClick() {
                    alert('Botão de login!');
                }} className="botaoCab">Entrar</button> }
            </nav>
        </header>
    );
}

export default Cabecalho;