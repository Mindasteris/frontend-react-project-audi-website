import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import ElectricAudi from "./components/ElectricAudi";
import News from "./components/News";
import Models from "./components/Models";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <ElectricAudi />
      <News />
      <Models />
      <Footer />
    </div>
  );
}

export default App;
