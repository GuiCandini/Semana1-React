import { useState } from "react";
import "../Abas/Abas.css"

function Abas() {
    const [aba, setAba] = useState("Impacto Social")
    return (
        <section>
            <div className="botoes-abas">
                <button className={aba === "Impacto Social" ? "ativo-abas":"desativado"} onClick={()=>setAba("Impacto Social")}>Impacto Social</button>
                <button className={aba === "Empregabilidade" ? "ativo-abas":"desativado"} onClick={()=>setAba("Empregabilidade")}>Empregabilidade</button>
                <button className={aba === "Tecnológico" ? "ativo-abas":"desativado"} onClick={()=>setAba("Tecnológico")}>Tecnológico</button>
            </div>
            <hr />
            {aba == "Impacto Social" && <section>
                <h2>Impacto Social</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus numquam porro, doloremque iusto ad neque?</p>
            </section>}
            {aba == "Empregabilidade" && <section>
                <h2>Empregabilidade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repudiandae.</p>
            </section>}
            {aba == "Tecnológico" && <section>
                <h2>Tecnológico</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>}
        </section>
    );
}

export default Abas;