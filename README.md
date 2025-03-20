# 🐱 Cat Facts App

Cat Facts App es una aplicación desarrollada con React que muestra datos curiosos sobre gatos junto con una imagen generada dinámicamente. Los datos se obtienen de la API de **Cat Fact** y las imágenes de **Cataas**.

## 🚀 Características

- Obtiene datos curiosos sobre gatos de la API **Cat Fact**.
- Genera imágenes de gatos con el dato obtenido, usando la API de **Cataas**.
- Indicador de carga con una animación de un gato caminando.
- Interfaz moderna y responsiva.
- Código modular con separación de lógica en servicios.


## 🛠️ Tecnologías Utilizadas

- **React** (con Hooks `useState` y `useEffect`)
- **Fetch API** para obtener datos desde las APIs
- **CSS** para el diseño responsivo

## 📦 Instalación y Ejecución

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/cat-facts-app.git
   cd cat-facts-app
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

## 🔗 APIs Utilizadas

1. **Cat Fact API:** Proporciona hechos curiosos sobre gatos.
   - URL: [`https://catfact.ninja/fact`](https://catfact.ninja/fact)

2. **Cataas API:** Genera imágenes de gatos con texto personalizado.
   - URL: [`https://cataas.com/cat/says/{text}?json=true`](https://cataas.com)

## 📂 Estructura del Proyecto
```
cat-facts-app/
│-- src/
│   │-- components/
│   │   ├── CatFact.js
│   │-- services/
│   │   ├── catFactService.js
│   │   ├── catImageService.js
│   │-- assets/
│   │   ├── gatoLoader.gif
│   │-- App.js
│   │-- main.jsx
│-- public/
│-- package.json
│-- README.md
```

## 🏗️ Cómo Funciona

1. Al cargar la aplicación, se obtiene un **dato curioso** sobre gatos y una imagen generada con el texto.
2. Cuando el usuario presiona el botón **"New Cat Fact"**, se genera un nuevo dato y una nueva imagen.
3. Durante la carga, se muestra una animación de un gato caminando.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. **Haz un fork** del repositorio.
2. Crea una **rama** con tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza tus cambios y **haz commit**: `git commit -m "Agregada nueva funcionalidad"`.
4. Haz un **push** a tu rama: `git push origin nueva-funcionalidad`.
5. Abre un **pull request** en GitHub.

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Puedes ver más detalles en el archivo `LICENSE`.

---

🐾 **Disfruta de los datos curiosos sobre gatos! 😺**

