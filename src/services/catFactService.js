//Obetener datos curiosos de gatos

export async function getCatFact() {
  try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      console.log("Cat fact:", data.fact);
      return data.fact;
  } catch (error) {
      console.error("Error fetching cat fact:", error);
      return "No se pudo obtener el dato.";
  }
}
