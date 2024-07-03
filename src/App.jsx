// jsx => JavaScript Extended
// Vai permitir escrever código "HTML" dentro do JS

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";
import Rodape from "./components/Rodape";
import Blog from "./components/Blog"

//Componente principal da aplicação
function App() {
    return (
        <>
            <main>
                <Titulo />
                <Mensagem />
                <Blog />
            </main>
            <Rodape />
        </>
    );
}


export default App;