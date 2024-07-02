// jsx => JavaScript Extended
// Vai permitir escrever código "HTML" dentro do JS

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";


//Componente principal da aplicação
function App() {
    return (
        <main>
            <Titulo />
            <Mensagem />
            <Mensagem />
            <Mensagem />
        </main>
    );
}


export default App;