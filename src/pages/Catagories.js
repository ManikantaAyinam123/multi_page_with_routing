import React from "react";
import Navbar from "../components/Navbar";
import Catagoriesbanner from "../components/Catagoriesbanner";
import CatagoriesCards from "../components/CatagoriesCards";
import Footer from "../components/Footer";
import FilterSection from "../components/CatagoriesFilter";

const Catagories = () => {
  const imagesData = [
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/kfvfwy80-0/shirt/m/g/i/38-12123408-here-now-original-imafw8d24qtkyubz.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/c/f/l-lstr-black-navy-vtexx-original-imagnyew8gcbkxyf.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/c/b/s-2297835-roadster-original-imafgmwy7py68tef.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/c/b/s-2297835-roadster-original-imafgmwy7py68tef.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/c/b/s-2297835-roadster-original-imafgmwy7py68tef.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/c/b/s-2297835-roadster-original-imafgmwy7py68tef.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/c/b/s-2297835-roadster-original-imafgmwy7py68tef.jpeg?q=70",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/c/b/s-2297835-roadster-original-imafgmwy7py68tef.jpeg?q=70",
    },
  ];
  return (
    <div>
      <Navbar />
      <Catagoriesbanner/>
      <div className="container">
      <div className="row">
        {/* Filter section */}
        <FilterSection />

        {/* Cards section */}
        <CatagoriesCards image={imagesData} />
      </div>
    </div>
     
      
      <Footer/>
    </div>
  );
};

export default Catagories;
