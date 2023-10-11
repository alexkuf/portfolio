import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Myservices from "./components/services";
import Myproject from "./components/myproject";
import ContactForm from "./components/contact";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-fill">
        <section style={{ paddingLeft: "15px" }} id="sectionHome">
          <Home />
        </section>
        <section
          style={{
            background: "black",
            minHeight: "900px",
            paddingLeft: "15px",
          }}
          id="about"
        >
          <AboutMe />
        </section>
        <section
          style={{
            background: "black",
            minHeight: "400px",
          }}
          id="services"
        >
          <Myservices />
        </section>
        <section
          style={{
            background: "black",
            minHeight: "400px",
          }}
          id="project"
        >
          <Myproject />
        </section>
        <section
          style={{
            background: "black",
            minHeight: "400px",
          }}
          id="contact"
        >
          <ContactForm />
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
