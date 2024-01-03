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
    return <div className="m-0 fixed top-0 "><div className="logo-container">
            <img src={Logo} alt="logo" className="w-30 h-30"/>
            <h1>FASHION</h1>
        </div></div>;
};

export default TopNav;
