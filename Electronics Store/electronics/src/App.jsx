import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Insta from "./components/Insta";
import ProductGrid from "./components/ProductGrid";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Types from "./components/Types";
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Nav />
      <Hero />
      <Category />
      <Types />
      <Services />
      <ProductGrid />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </h1>
  );
}
