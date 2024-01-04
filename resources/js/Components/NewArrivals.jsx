import Arrival1 from "../../images/Home/NewArrivals/arrival1.png";
import Arrival2 from "../../images/Home/NewArrivals/arrival2.png";
import Arrival3 from "../../images/Home/NewArrivals/arrival3.png";
import Arrow from "../../images/Home/NewArrivals/arrow.png";
import Vector from "../../images/Home/Hero/vector.png";

const arrivals = [
    {
        name: "Hoodies & Sweatshirts",
        img: Arrival1,
    },
    {
        name: "Coats & Parkas",
        img: Arrival2,
    },
    {
        name: "Tees & T-Shirts",
        img: Arrival3,
    },
];

const NewArrivals = () => {
    return (
        <div className="new-arrivals-section">
            <h1 className="text-[40px] uppercase font-black pb-[60px] ml-[60px] flex">
                New
                <span className="relative ml-[10px]">
                    <p className="z-10 relative">Arrivals</p>
                    <img
                        src={Vector}
                        className="decoration w-24 h-4 absolute bottom-[10px] z-0 -right-3"
                        alt="Decoration"
                    />
                </span>
            </h1>
            <div className="arrivals-container flex justify-around">
                {arrivals.map((arrival, index) => (
                    <div key={index}>
                        <img
                            src={arrival.img}
                            className="w-[300px]"
                            alt="arrival-img"
                        />
                        <div className="flex justify-between items-center pt-[20px]">
                            <div>
                                <p>{arrival.name}</p>
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

export default NewArrivals;
