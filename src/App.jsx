import "./App.css";
import movies from "./assets/data/movies.json";
import Section from "./assets/components/Section";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Sections from "./assets/components/Sections";

function App() {
  // console.log(movies);
  return (
    <>
      <Header />
      {/* Affichage Pédestre */}

      {/* {movies.map((elem) => {
        return (
          <>
            <h2>{elem.category}</h2>
            {elem.images.map((url) => {
              return <img src={url} alt="" />;
            })}
          </>
        );
      })} */}

      {/* Utilisation Section */}
      {/* {movies.map((elem, index) => {
        return (
          <>
            <Section
              key={index}
              category={elem.category}
              movies={elem.images}
            />
          </>
        );
      })} */}

      <Sections data={movies} />

      <Footer />
    </>
  );
}

export default App;
