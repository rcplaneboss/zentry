import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://github.com", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <Footer className="bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; AXIOM 2024. All right preserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map(({href, icon}) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer nopener"
              className="text-black transition-color duration-500 ease-in-out hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
