
import Brand from "@/Components/Brand";
import Community from "@/Components/Community";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import NewArrivals from "@/Components/NewArrivals";
import Payday from "@/Components/Payday";
import TopNav from "@/Components/TopNav";
import Voucher from "@/Components/Voucher";
import YoungFavorites from "@/Components/YoungFavorites";

const Home = () => {
    return (
        <div className="main-wrapper">
            <TopNav />
            <Hero />
            <Brand />
            <NewArrivals />
            <Payday />
            <YoungFavorites />
            <Voucher />
            <Community />
            <Footer />
        </div>
    );
};

export default Home;
