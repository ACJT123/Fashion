import Brand1 from "../../images/Home/Brand/brand1.png";
import Brand2 from "../../images/Home/Brand/brand2.png";
import Brand3 from "../../images/Home/Brand/brand3.png";
import Brand4 from "../../images/Home/Brand/brand4.png";
import Brand5 from "../../images/Home/Brand/brand5.png";
import Brand6 from "../../images/Home/Brand/brand6.png";

const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

const Brand = () => {
    return (
        <div className="brands-container flex justify-around items-center px-3 py-4 bg-[#EBD96B]">
            {brands.map((brand, index) => (
                <div key={index}>
                    <img src={brand} alt="brand" className="w-[80px] mix-blend-multiply" />
                </div>
            ))}
        </div>
    );
};

export default Brand;
