import "../CardAtividade/CardAtividade.css"

const produtos = [
    {cod: 1, nome: "Açaí Diet", imagem: "https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/acai-500-qgidd7efk51w7ys3eqkc6aw3jhjrpggxj825shprrk.png", desc: "Disponível em diferentes variações, como puro, adoçado com stevia, sucralose e xarope diet."},
    {cod: 2, nome: "Açaí batido com banana", imagem:"https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/acai-500-qgidd7efk51w7ys3eqkc6aw3jhjrpggxj825shprrk.png", desc: "Disponível em diferentes variações, como puro, adoçado com stevia, sucralose e xarope diet."},
    {cod: 3, nome: "Açaí batido com morango", imagem: "https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/acai-500-morango2-qgidbz80mxdf2ak9kpgvf41fmdlinoljp5ec8hj9w0.png", desc: "Outra opção deliciosa que combina açaí com a doçura dos morangos."},
    {cod: 4, nome: "Cremes e sucos", imagem: "https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/grupo-de-creme-qgfdz65g5yqqdketc4flcdsac6qpttkwc4ms6zx9lc.png", desc: "Cremes e sucos frescos são opções refrescante."}
];


function CardAtividade() {

    const cardsAtiv = produtos.map((card) => {
        return (
            <section className="cardsGeral" key={card.cod}>
                <section className="cardsAcai">
                    <h5 className="tituloAcai">{card.nome}</h5>
                    <div><img className="imagemAcai" src={card.imagem} /></div>
                    <p className="desc-Acai">{card.desc}</p>
                </section>
            </section>
        );
    });
    return (
        <section className="card-retorno">{cardsAtiv}</section>
    );
}

export default CardAtividade;