import "./Banner.css";
import imagem from "../assets/imagemPonte";

function Banner() {
    return (
        <section>
            <img src={imagem} alt="Banner" width="340px"/>
            <br />
            {/* <img src="/vite.svg" alt="Logo Vite" />
            <br />
            <img src="/images/imagemPonte.jpg" width="340px" /> */}
            <br />
            <button>Clique aqui</button>
        </section>
    );
}

export default Banner;