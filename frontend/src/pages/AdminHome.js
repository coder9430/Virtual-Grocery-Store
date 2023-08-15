import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/862/479/original/modern-banner-with-paper-bag-full-of-fruits-organic-grocery-shopping-web-banner-design-for-store-online-market-home-delivery-flat-illustration-horizontal-background-fruit-poster-vector.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.shutterstock.com/image-vector/vegetable-fruits-farm-market-shop-260nw-1832541259.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://us.123rf.com/450wm/kutuzovadesign/kutuzovadesign2201/kutuzovadesign220100143/180804605-tiny-people-collect-grocery-in-bag-green-textile-reusable-shopping-bag-full-food-fruits.jpg?ver=6" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                <AdminProductList></AdminProductList>
            </NavBar>
            Foot
        </div>
     );
}

export default AdminHome;