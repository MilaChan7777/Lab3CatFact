import { useState, useEffect } from "react";
import { getCatFact } from "../services/catFactService";
import { getCatImage } from "../services/catImageService";
import gatoLoader from "../assets/gato2.gif";
import "./CatFact.css";

export default function CatFact() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCatData = async () => {
    setLoading(true);

    try {
      const factText = await getCatFact();
      const firstFourWords = factText.split(" ").slice(0, 4).join(" ");
      const image = await getCatImage(firstFourWords);
      setFact(factText);
      setImageUrl(image);
    } catch (error) {
      console.error("Error fetching cat data:", error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loading-container">
          <img src={gatoLoader} alt="Walking cat" className="walking-cat" />
          <p className="loading-text">🐱 Miawing...</p>
        </div>
      ) : (
        <div className="cat-container">
          <img src={imageUrl} alt="Cat" className="cat-image" />
          <div className="cat-content">
            <h1 className="cat-title">CAT FACT</h1>
            <p className="fact">{fact}</p>
            <button onClick={fetchCatData} className="refresh-button">
            New Cat Fact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}




//Es el componente que maneja la lógica principal de la aplicación.
//Obtiene un hecho sobre gatos y una imagen desde dos servicios externos.
//Controla el estado de carga (loading).
//Renderiza la interfaz de usuario.