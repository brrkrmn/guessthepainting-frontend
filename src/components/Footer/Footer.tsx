import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-brown-light flex items-center justify-center gap-1 font-fairplay text-lg">
      <div>made by</div>
      <Link
        href="https://www.linkedin.com/in/berra-karaman-3936471b0/"
        className="hover:text-blue-light transition"
      >
        Berra Karaman
      </Link>
    </div>
  );
};

export default Footer;
