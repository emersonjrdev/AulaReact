
import "./banner.css";

const Banner = () => {
  const bannerStyle = {
    borderRadius: "12px",
    marginTop: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "80%",
    height: "auto",
  };

  const description = `
    "Cavaleiro das Trevas" é um título frequentemente associado ao icônico personagem de quadrinhos Batman, 
    criado por Bob Kane e Bill Finger. Batman é a identidade secreta de Bruce Wayne, um bilionário de Gotham City 
    que dedica sua vida a combater o crime após testemunhar o assassinato de seus pais quando criança. Diferente 
    de muitos super-heróis, Batman não possui superpoderes; ele depende de sua inteligência, habilidades de combate, 
    tecnologia avançada e recursos financeiros para enfrentar os vilões.
  `;

  return (
    <div className="banner">
      <h1>Banner do Batman</h1>
      <img
        style={bannerStyle}
        src="https://cdn.europosters.eu/image/hp/66923.jpg"
        alt="Batman Banner"
      />
      <p className="caption">O Cavaleiro das Trevas</p>
      <p className="description">{description}</p>
      <a href="https://pt.wikipedia.org/wiki/Batman"><button className="botao">Saiba mais</button></a>
    </div>
  );
};

export default Banner;
