import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import "../App.css";
import Swiper from '../components/Swiper';

const Home = () => {
  const imagesData =[
    {
      imageUrl:"./assets/images/cards_1.jpg"
    },
    {
      imageUrl:"./assets/images/cards_2.jpg"
    },
    {
      imageUrl:"./assets/images/cards_3.jpg"
    },
    {
      imageUrl:"./assets/images/cards_4.jpg"
    }
  ];
  const swiperImageData =[
    {
      imageUrl:"./assets/images/Chino-Pants.jpg"
    },
    {
      imageUrl:"./assets/images/pyjamas.jpg"
    },
    {
      imageUrl:"./assets/images/full-sleeve.jpg"
    },
    {
      imageUrl:"./assets/images/Chino-Pants.jpg"
    },
    {
      imageUrl:"./assets/images/polos.jpg"
    }
  ];
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Cards image={imagesData}/>
      <Swiper image={swiperImageData}/>
      <Banner/>
      <Footer/>



    </div>
  )
}

export default Home
