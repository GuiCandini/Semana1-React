import "./CardAluno.css";

function CardAluno(props) {
    const classe = props.media >= 7 ? "aprovado" : "reprovado";

    return (
        <section className="card-corpo">
            <h3 className="titulo-card">Resultado aluno</h3>
            <ul className="lista">
                <li>Aluno: {props.nome}</li>
                <li>Série: {props.serie}</li>
                <li>Media: {props.media}</li>
                <p className={classe}>{props.media>=7 ? <strong>Aprovado!</strong> : <strong>Reprovado!</strong>}</p>
            </ul>
        </section>
    );
}

export default CardAluno;