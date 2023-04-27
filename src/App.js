import AppBar from "./components/AppBar";
import Gallery from "./components/Gallery";
import './App.css'

function App() {
  return (
    <>
      <AppBar />
      <section className="flex flex-row">
        <Gallery />
      </section>
    </>
  );
}

export default App;
