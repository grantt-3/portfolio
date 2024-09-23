import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "github.com/justtonowu" },
    { icon: <FaLinkedin />, path: "linkedin.com/grant-ifeanyi" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "x.com/grantt_3" },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
