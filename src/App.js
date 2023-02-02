import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/context";

function App() {
  return (
    <main>
      <ThemeContextProvider>
        <Header />
        <Introduction />
        <About />
        <Projects />
        <Footer />
      </ThemeContextProvider>
    </main>
  );
}

export default App;
