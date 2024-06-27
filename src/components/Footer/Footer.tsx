import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 font-fairplay text-lg text-brown-light">
      <div>made by</div>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/berra-karaman-3936471b0/"
        className="transition hover:text-blue-light"
      >
        Berra Karaman
      </Link>
    </div>
  );
};

export default Footer;
