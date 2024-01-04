import SocialIcon1 from "../../images/Home/Footer/socialIcon1.png";
import SocialIcon2 from "../../images/Home/Footer/socialIcon2.png";
import SocialIcon3 from "../../images/Home/Footer/socialIcon3.png";
import SocialIcon4 from "../../images/Home/Footer/socialIcon4.png";
import "../../css/Home/Footer.scss";

const socialIcons = [SocialIcon1, SocialIcon2, SocialIcon3, SocialIcon4];

const companyLinks = [
    {
        name: "about",
        url: "/about",
    },
    {
        name: "contact us",
        url: "/contactus",
    },
    {
        name: "support",
        url: "/support",
    },
    {
        name: "careers",
        url: "/careers",
    },
];

const quickLinks = [
    {
        name: "share location",
        url: "/sharelocation",
    },
    {
        name: "orders tracking",
        url: "/orderstracking",
    },
    {
        name: "size guide",
        url: "/sizeguide",
    },
    {
        name: "FAQ",
        url: "/faq",
    },
];

const legalLinks = [
    {
        name: "terms and conditions",
        url: "/termsandconditions",
    },
    {
        name: "privacy policy",
        url: "/privacypolicy",
    },
];

const Footer = () => {
    return (
        <div className="footer-container grid grid-flow-col bg-black text-white p-20">
            <div className="contacts">
                <h1 className="text-[40px] font-extrabold -mt-[10px]">FASHION</h1>
                <p className="w-[300px]">Complete your style with awesome clothes from us.</p>
                <div className="social-media-icons-list flex gap-3 mt-5">
                    {socialIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="bg-[#E5C643] rounded-[10px] p-1 px-2 flex items-center"
                        >
                            <img
                                src={icon}
                                alt=""
                                className={`w-[20px] ${
                                    index === 3 ? "h-[25px]" : "h-[20px]"
                                }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="company">
                <h3>Company</h3>
                <div className="links">
                    {companyLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.url}>{link.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="quick-link">
                <h3>Quick Link</h3>
                <div className="links">
                    {quickLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.url}>{link.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="legal">
                <h3>Legal</h3>
                <div className="links">
                    {legalLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.url}>{link.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
