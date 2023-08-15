import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Carousel1 from "../features/Carousel";
import Addition from "../features/product/components/Addition";
import "./Home.css"


function Home() {
    const images = [
        'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      ];

    return ( 
        <div className="whole">
            <NavBar>
                {/* <Carousel1 images={images}/> */}
                {/* <img src="https://srikakulamads.com/wp-content/uploads/2020/12/What-is-online-grocery-shopping.png" alt="" /> */}
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" id="carousel">
    <div class="carousel-item active">
      <img src="https://srikakulamads.com/wp-content/uploads/2020/12/What-is-online-grocery-shopping.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.yourstory.com/cs/1/65c7c710-c186-11e8-af1c-974e95f3b2db/Online-Grocery-Store-Business1559562505205.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/previews/007/862/479/original/modern-banner-with-paper-bag-full-of-fruits-organic-grocery-shopping-web-banner-design-for-store-online-market-home-delivery-flat-illustration-horizontal-background-fruit-poster-vector.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                <Addition/>
                <img src="https://d1n5l80rwxz6pi.cloudfront.net/indian-grocery-items.jpg" alt="" />
                
                  <div className="child22">
                        <img src="https://i.pinimg.com/originals/17/e8/f1/17e8f167cf008662215523f379064c27.png" alt="" />
                  </div >

                
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;