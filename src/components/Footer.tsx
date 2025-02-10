import Link from "next/link";
import { links, socials } from "../data/links";
import { texts } from "../data/texts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-4 w-full mx-auto p-4 bg-secondary md:h-[15vh]">
      <Link
        className="flex items-center no-underline hover:scale-110 transform transition-transform duration-150"
        href="/"
      >
        <Image
          className="w-20 h-20 rounded-full"
          src="/AIDataScience_Image.jpg"
          width={80}
          height={80}
          alt="AI & Data Science Club Logo"
        />
      </Link>
      <div className="flex gap-4">
        <div className="md:text-left text-center">
          <h3 className="text-primary font-light text-lg px-2">Links</h3>
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li key={index} className="text-sm">
                <Link
                  className="group inline-block transition duration-300 px-2 py-1"
                  href={link.href}
                >
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:text-left text-center">
          <h3 className="text-primary font-light text-lg px-2">Socials</h3>
          <ul className="flex flex-col">
            {socials.map((social, index) => (
              <li key={index} className="text-sm">
                <a
                  className="group inline-block transition duration-300 px-2 py-1"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                >
                  {social.alt}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="max-w-xs font-extralight md:text-left text-center leading-tight">
        {texts.footer.text}
      </span>
    </footer>
  );
};

export default Footer;
