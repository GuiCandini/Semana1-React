import "./CardAluno.css";

function CardAluno(props) {
    return (
        <section className="card-corpo">
            <h3 className="titulo-card">Resultado aluno</h3>
            <ul className="lista">
                <li>Aluno: {props.nomeAluno}</li>
                <li>Série: {props.serie}</li>
                <li>Media: {props.media}</li>
                {props.media>=7 ? `Aprovado!` : `Reprovado!`}
            </ul>
        </section>
    );
}

export default CardAluno;