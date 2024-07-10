import "../Post/Post.css";
import { useState } from "react";

function Post() {
    const [post, setPost] = useState(false);

    function handleCurtida() {
        setPost(!post);
    }

    return(
        <section>
            <h2>Titulo</h2>
            <div className="euro">
                <img src="https://espnpressroom.com/brazil/files/2024/03/EUROCOPA-2024-1024x576.jpg" alt="Euro" />
            </div>
            <div className="curtida">
                <button onClick={handleCurtida}>{post === true ? <img src="https://cdn2.iconfinder.com/data/icons/matticons-universal-line/32/Basic_Shape_Line_Heart-512.png" alt="Curtido" /> : <img src="https://cdn1.iconfinder.com/data/icons/app-user-interface-flat/64/like_love_heart_app_user_interface-512.png" alt="Não curtido" />}</button>
            </div>
        </section>
    );
}

export default Post;