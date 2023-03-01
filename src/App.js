import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutPageView from "./view/AboutPageView";
import BlogPageView from "./view/BlogPageView/BlogPageView";
import PortfolioPageView from "./view/PortfolioPageView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Hero />
        <AboutPageView />
        <PortfolioPageView />
        <BlogPageView />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
