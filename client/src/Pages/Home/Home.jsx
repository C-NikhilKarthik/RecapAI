import Navbar from "../../components/Navbar";
import Moto_Link from "../../components/Moto_Link";
import Footer from "../../components/Footer";
import backgroundImage from "../../images/733417.png"

export default function Home() {
  return (
    <div className="relative h-full bg-gray-900 w-full">
      {/* <img src={backgroundImage} alt="background image" className="absolute top-0 left-0 h-full w-full"/> */}
      <Navbar />
      <Moto_Link />
      <Footer />
    </div>
  );
}
