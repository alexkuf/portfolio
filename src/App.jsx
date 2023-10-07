import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import PageHaders from "./components/pageHaders";
import AboutMe from "./components/aboutme";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Header />
      </header>
      <main className="flex-fill">
        <section style={{ paddingLeft: "15px" }} id="sectionHome">
          <PageHaders />
        </section>
        <section
          style={{
            background: "black",
            minHeight: "900px",
            paddingTop: "90px",
            paddingBottom: "70px",
            paddingLeft: "15px",
          }}
          id="about"
        >
          <AboutMe />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
