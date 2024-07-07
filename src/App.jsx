// jsx => JavaScript Extended
// Vai permitir escrever código "HTML" dentro do JS

// import Titulo from "./components/Titulo/Titulo";
// import Mensagem from "./components/Mensagem/Mensagem";
// import Rodape from "./components/Rodape/Rodape";
// import Blog from "./components/Blog/Blog";
// import Navbar from "./components/Navbar/Navbar";
// import CardAluno from "./components/CardAluno/CardAluno";
// import Produto from "./components/Produto/Produto";
// import Listagem from "./components/Listagem/Listagem";
// import Banner from "./components/Banner/Banner";

import BannerSemana4 from "./components/BannerSemana4/BannerSemana4";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import RodapeSemana4 from "./components/RodapeSemana4/RodapeSemana4";


//Componente principal da aplicação
function App() {
    return (
        <>
            <main>
                <Cabecalho login = {false} user = "Guilherme"/>
                <BannerSemana4 />
                <RodapeSemana4 />
            </main>
        </>
    );
}


export default App;


{/* <Navbar logado = {true} nomeUsuario = "Candini"/>
                <Titulo />
                <Mensagem 
                    textoTitulo = "Mensagem" 
                    nomeAutor = "João CALANGO" 
                    linkImagem = "https://picsum.photos/200" 
                    paragrafo = "Não se preocupe, amanhã CALANGO!"/> */}
                
                {/* <CardAluno nomeAluno = "Guilherme" serie = "1° ano" media = {7}/>
                <CardAluno nomeAluno = "Jão" serie = "2° ano" media = {3}/>

                <Produto nomeProd = "Playstation 5" precoUnit = {4399} desconto = {10} />
                <Produto nomeProd = "Celular" precoUnit = {2000} desconto = {15} />
                <Produto nomeProd = "Carro" precoUnit = {250000} desconto = {0} /> */}

                {/* <Blog /> */}

                {/* <Listagem /> */}
                {/* <Banner/> */}
                {/* <Rodape /> */}