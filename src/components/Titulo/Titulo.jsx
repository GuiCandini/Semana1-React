//Título é o nome do componente
//Componentes são funções
//Retorno da função é a parte visual
//Exportar o componente
import "./Titulo.css"

function Titulo() {
    return (
    <h2 className="titulo">Frases do dia</h2>
);
}

//Disponibilizar o componente para ser utilizado em outros arquivos do projeto
export default Titulo;