import "../../css/Home/Community.scss";

const Community = () => {
    return (
        <div className="community-container bg-[#E5C643] py-[60px] flex justify-center flex-col items-center gap-5">
            <p className="text-white text-[30px] font-black max-w-[500px] text-center">
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </p>
            <p className="text-white font-normal tracking-[1px]">
                Type your email down below and be young wild generation
            </p>
            <form>
                <input placeholder="Add your email here" type="text" />
                <button>
                    <p>SEND</p>
                </button>
            </form>
        </div>
    );
};

export default Community;
