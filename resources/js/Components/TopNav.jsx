import Logo from "../../images/Home/logo.png";

const links = [
    {
        name: "catalogue",
        url: "/catalogue",
    },
    {
        name: "fashion",
        url: "/fashion",
    },
    {
        name: "favourite",
        url: "/favourite",
    },
    {
        name: "lifestyle",
        url: "/lifestyle",
    },
    {
        name: "sign up",
        url: "/signup",
    },
];

const TopNav = () => {
    return (
        <div className="m-0 flex items-center font-bold justify-between w-full py-8">
            <div className="logo-container flex gap-3 items-center">
                <img src={Logo} alt="logo" className="w-7 h-7" />
                <h1 className="text-2xl">FASHION</h1>
            </div>
            <div className="nav-links flex gap-10">
                {links.map((link) => (
                    <div key={link.name}>
                        <a
                            href={link.url}
                            className={`text-[15px] font-medium uppercase ${link.name === "sign up" ? "text-white bg-black py-3 px-6 rounded-lg" : ""}`}
                        >
                            {link.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopNav;
