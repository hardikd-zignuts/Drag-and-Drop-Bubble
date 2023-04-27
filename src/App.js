import AppBar from "./components/AppBar";
import BubbleZone from "./components/Bubble Zone";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <AppBar />
      <section className="flex flex-row">
        <Gallery />
        <BubbleZone />
      </section>
    </>
  );
}

export default App;
