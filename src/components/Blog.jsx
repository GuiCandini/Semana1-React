import Postagem from "./Postagem";
import "./Blog.css"

function Blog() {
    return (
        <section className="Blog">
            <hr />
            <h2>Postagens</h2>
            <Postagem titulo="React é muito bom" desc="Corinthians" linkImg = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png" legenda = "imagem"/>
            <Postagem titulo="CSS é muito bom" desc="CSS" linkImg = "https://hermes.dio.me/articles/cover/b429cfda-d8f4-4583-a5e7-8e1a2c323dd1.jpg" legenda = "imagem"/>
        </section>
    );
}

export default Blog;