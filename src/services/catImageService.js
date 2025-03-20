//Obtener imágenes de gatos

export async function getCatImage(text) {
  try {
      const formattedText = text.split(" ").slice(0, 4).join(" "); // 4 primeras palabras
      const response = await fetch(`https://cataas.com/cat/says/${encodeURIComponent(formattedText)}?json=true`);
      
      if (!response.ok) {
          throw new Error(`Error en la API de Cataas: ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta API imagen:", data); // Debug

      if (!data.url) throw new Error("No se recibió URL de imagen");

      // Asegurarnos de usar el `data.url` correctamente
      return data.url.startsWith("https") ? data.url : `https://cataas.com${data.url}`;
  } catch (error) {
      console.error("Error obteniendo la imagen del gato:", error);
      return null;
  }
}
