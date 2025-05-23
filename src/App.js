import Header from "./components/Header";
// import Slider from "./components/Slider";
// import Welcome from "./components/Welcome";
// import Services from "./components/Services";
// import Stats from "./components/Stats";
// import Testimonials from "./components/Testimonials";
// import WhyChooseUs from "./components/WhyChooseUs";
// import ClientLogos from "./components/ClientLogos";
// import News from "./components/News";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {/* <Slider />
        <Welcome />
        <Services />
        <Stats />
        <Testimonials />
        <WhyChooseUs />
        <ClientLogos />
        <News /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
