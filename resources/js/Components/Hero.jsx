import Lady from "../../images/Home/Hero/lady.png";
import Vector from "../../images/Home/Hero/vector.png";
import Star from "../../images/Home/Hero/star.png";
import "../../css/Home/Hero.scss";

const Hero = () => {
    return (
        <div className="hero-container bg-[#F4F6F5] px-5 pt-5 flex rounded-[40px] justify-between">
            {/* phases */}
            <div className="phase-and-btn-container ml-[80px] mt-[20px]">
                <div className="phase w-min font-black leading-snug text-[40px]">
                    <span className="bg-white inline-block transform -rotate-[2deg] pl-[10px] pr-[150px] -ml-[10px]">
                        <p className="transform rotate-[2deg]">LET'S</p>
                    </span>{" "}
                    EXPLORE{" "}
                    <span className="bg-[#EBD96B] inline-block transform -rotate-[2deg] pl-[10px] pr-[150px] -ml-[10px]">
                        <p className="transform rotate-[2deg]">UNIQUE</p>
                    </span>{" "}
                    CLOTHES.
                </div>
                <div className="phase-description tracking-[1px]">
                    Live for Influential and Innovative fashion!
                </div>
                <div className="shop-now-container py-6 pb-10 flex items-center gap-[20px]">
                    <img src={Vector} className="decoration w-24 h-4" />
                    <button className="shop-now-btn text-white py-3 px-6 rounded-lg bg-black">
                        Shop Now
                    </button>
                </div>
            </div>
            {/* lady */}
            <div className="img-container relative">
                <img
                    src={Lady}
                    alt=""
                    width={450}
                    className="lady ml-auto mr-10"
                />
                <img
                    src={Star}
                    alt="star-icon"
                    className="star first"
                />
                <img
                    src={Star}
                    alt="star-icon"
                    className="star second"
                />
                <img
                    src={Star}
                    alt="star-icon"
                    className="star third"
                />
                <img
                    src={Star}
                    alt="star-icon"
                    className="star fourth"
                />
            </div>
        </div>
    );
};

export default Hero;
