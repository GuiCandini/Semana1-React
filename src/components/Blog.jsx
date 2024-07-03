import Postagem from "./Postagem";
import "./Blog.css"

function Blog() {
    return (
        <section className="Blog">
            <hr />
            <h2>Postagens</h2>
            <Postagem />
            <Postagem />
            <Postagem />
        </section>
    );
}

export default Blog;