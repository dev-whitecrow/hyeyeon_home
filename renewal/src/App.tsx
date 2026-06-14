import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full font-sans antialiased overflow-x-hidden selection:bg-brand-accent/30 selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
