import "./App.css";
import Header from "./components/header/Header.jsx";
import Landing from "./components/landing/Landing.jsx";
import Listing from "./components/listing/Listing.jsx";
import AddCard from "./components/AddCard.jsx";
import Tastimonials from "./components/Tastimonials.jsx";
import Commuinity from "./components/Commuinity.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <Listing />
      <AddCard />
      <Tastimonials />
      <Commuinity />
      <Footer />
    </>
  );
}

export default App;
