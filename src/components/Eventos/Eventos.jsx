//Eventos = são ações que acontecem na interface, podem ser provocados pelo usuário.
//Manipulador de eventos => é uma resposta ao evento

function Eventos() {

    //Manipulador de eventos
    function handleClick() {
        alert("Você clicou!");
        // confirm("Deseja continuar?");
    }

    return (
        <section>
            <h1 onMouseEnter={() => alert("Olá!")}>Título</h1>
            <button onClick={handleClick}>Clique aqui</button>
            <button onClick={() => alert("Clicou novamente")}>Clique Novamente</button>
        </section>
    );
}

export default Eventos;