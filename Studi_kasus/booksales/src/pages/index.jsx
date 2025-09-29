import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Team from "../components/shared/Team";

export default function Home (){
    return(
        <>
            {/* Header */}
       <Header/>

        {/* Hero */}
          <Hero/>
          

        {/* Product List */}
        <ProductList/>
       

        {/* Team */}
        <Team/>
      

        {/* Contact */}
        <Contact/>


        {/* Footer */}
        <Footer/>
        </>
    )
}