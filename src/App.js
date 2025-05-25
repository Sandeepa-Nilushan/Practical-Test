import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Welcome from "./components/Wellcome/Welcome";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ClientLogos from "./components/Client_Logos/ClientLogos";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
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
