// jsx => JavaScript Extended
// Vai permitir escrever código "HTML" dentro do JS

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";
import Rodape from "./components/Rodape";
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import CardAluno from "./components/CardAluno"
import Produto from "./components/Produto";

//Componente principal da aplicação
function App() {
    return (
        <>
            <main>
                <Navbar logado = {true} nomeUsuario = "Candini"/>
                <Titulo />
                <Mensagem 
                    textoTitulo = "Mensagem" 
                    nomeAutor = "Shakespeare" 
                    linkImagem = "https://picsum.photos/200" 
                    paragrafo = "Não se preocupe, o amanhã será pior que hoje!"/>
                
                <CardAluno nomeAluno = "Guilherme" serie = "1° ano" media = "7"/>

                <Produto nomeProd = "Playstation 5" precoUnit = {4399} desconto = {10} />

                <Blog />
            </main>
            <Rodape />
        </>
    );
}


export default App;