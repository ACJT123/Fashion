import Favorite1 from "../../images/Home/YoungFavorites/young1.png";
import Favorite2 from "../../images/Home/YoungFavorites/young2.png";
import Arrow from "../../images/Home/NewArrivals/arrow.png";
import Vector from "../../images/Home/Hero/vector.png";

const favorites = [
    {
        name: "Trending on Instagram",
        img: Favorite1,
    },
    {
        name: "All Under $40",
        img: Favorite2,
    },
];

const YoungFavorites = () => {
    return (
        <div className="young-favorites-section">
            <h1 className="text-[40px] uppercase font-black pb-[60px] ml-[60px] flex">
                Young's
                <span className="relative ml-[10px]">
                    <p className="z-10 relative">Favorites</p>
                    <img
                        src={Vector}
                        className="decoration w-24 h-4 absolute bottom-[10px] z-0 -right-3"
                        alt="Decoration"
                    />
                </span>
            </h1>
            <div className="favorites-container flex gap-10 mx-[60px]">
                {favorites.map((favorite, index) => (
                    <div key={index}>
                        <img
                            src={favorite.img}
                            className=""
                            alt="favorites-img"
                        />
                        <div className="flex justify-between items-center pt-[20px]">
                            <div>
                                <p>{favorite.name}</p>
                                <p className="text-[#7F7F7F]">Explore Now!</p>
                            </div>
                            <img src={Arrow} alt="arrow" className="h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YoungFavorites;
