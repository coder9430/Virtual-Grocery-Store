import Login from "../features/auth/components/Login";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import "./Loginpage.css"

function LoginPage() {
    return ( <div className="main">
        
        {/* <NavBar></NavBar>  */}
        <Login></Login>
        
        {/* <Footer></Footer> */}
    </div>  );
}

export default LoginPage;