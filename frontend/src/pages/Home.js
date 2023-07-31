import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Carousel1 from "../features/Carousel";


function Home() {
    const images = [
        'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      ];

    return ( 
        <div>
            <NavBar>
                {/* <Carousel1 images={images}/> */}
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;