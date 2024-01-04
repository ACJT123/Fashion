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
        name: "signup",
        url: "/signup",
    },
];

const TopNav = () => {
    return (
        <div className="m-0 fixed top-0 flex items-center font-bold justify-between w-full py-8 px-14">
            <div className="logo-container flex gap-3 items-center">
                <img src={Logo} alt="logo" className="w-7 h-7" />
                <h1 className="font-logoText text-4xl">FASHION</h1>
            </div>
            <div className="nav-links flex gap-20">
                {links.map((link) => (
                    <div key={link.name}>
                        <a
                            href={link.url}
                            className={`text-xl font-medium uppercase ${link.name === "signup" ? "text-white bg-black py-3 px-5 rounded-lg" : ""}`}
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
