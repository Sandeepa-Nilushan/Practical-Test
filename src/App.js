import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
// import WhyChooseUs from "./components/WhyChooseUs";
import ClientLogos from "./components/ClientLogos";
import News from "./components/News";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import './App.css';

// Main layout component with header and footer
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header className="flex-none" />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Slider />
            <Welcome />
            <Services />
            <Stats />
            <Testimonials />
            {/* <WhyChooseUs /> */}
            <ClientLogos />
            <News />
          </MainLayout>
        } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
