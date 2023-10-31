import Navbar from "../../components/Navbar";
import Moto_Link from "../../components/Moto_Link";
import Footer from "../../components/Footer";
import backgroundImage from "../../images/733417.png"

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <img src={backgroundImage} alt="background image" className="absolute top-0 left-0 h-full w-full"/>
      {/* <img src="https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg" className="absolute top-0 left-0 h-full w-full" alt="background image"/> */}
      <Navbar />
      <Moto_Link />
      <Footer />
    </div>
  );
}
