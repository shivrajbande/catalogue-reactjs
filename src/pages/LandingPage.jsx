import { React, createContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingMain from "../components/LandingMain";
import { ProductsProvide } from "../contexts/ProductContext";
export default function LandingPage() {
  return (
    <>
      <Header />
      <LandingMain />
      <Footer />
    </>

    // <ProductsProvide>
  );
}
