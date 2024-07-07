import "./Listagem.css"
import "../CardAluno/CardAluno"
import CardAluno from "../CardAluno/CardAluno";

const compras = ["Batata", "Arroz", "Feijão", "Farofa", "Bolacha", "Manteiga"];

const produtos = [
    {cod: 1, nome: "Batata", quantidade: 8, precoUnit: 5},
    {cod: 2, nome: "Arroz", quantidade: 2, precoUnit: 16},
    {cod: 3, nome: "Macarrão", quantidade: 3, precoUnit: 7},
    {cod: 4, nome: "Bolacha", quantidade: 5, precoUnit: 2.5}
];

const alunos = [
    {matricula: 1, nome: "Guilherme", serie: "1° ano", media: 7.2},
    {matricula: 2, nome: "Thiago", serie: "1° ano", media: 7},
    {matricula: 3, nome: "Yuri", serie: "3° ano", media: 5.8}
];

//Gerar componentes/elementos a partir de dados (array)

function Listagem() {
    //Cada string no array de compras está sendo transformada em um <li>
    const itensCompra = compras.map((compra, index) => {
        return <li key = {index}>{compra}</li>
    });

    //a Key é importante para que o react saiba remover ou adicionar o elemento na tela corretamente
    const cardsProd = produtos.map((prod) => {
        return (
            <article key = {prod.cod}>
                <h3>Nome do Produto: {prod.nome}</h3>
                <p>Quantidade: {prod.quantidade}</p>
                <p>Subtotal: R${prod.precoUnit * prod.quantidade}</p>
                <br />
            </article>
        );
    });

    const cardAlunos = alunos.map((aluno) =>{
        const classe = aluno.media >= 7 ? "aprovado" : "reprovado";
        return <CardAluno key={aluno.matricula} nome={aluno.nome} serie={aluno.serie} media={aluno.media}/>
    });

    return (
        <>
            <h2>Lista de Compras</h2>
            <ul>{itensCompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>{cardsProd}</section>
            <hr />
            <h2>Lista de Alunos</h2>
            <section>{cardAlunos}</section>

        </>
    );
}

export default Listagem;

//Exercício: Listar os cards de aluno a partir de um array de alunos;
// - criar um array de objetos (matricula, nome, série e média)
// - gerar uma lista de cardAluno