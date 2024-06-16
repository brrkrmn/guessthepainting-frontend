import Image from "next/image";
import Link from "next/link";
import { InfoBox } from "./components/InfoBox";
import { QuestionBox } from "./components/QuestionBox";

const Header = () => {
  return (
    <div className="max-w-600 flex h-fit w-full items-center justify-center gap-2 px-1">
      <Link
        href="/"
        className="group mr-auto flex items-center justify-center gap-1"
      >
        <Image
          src="/icons8-dailyart.png"
          alt="Mona Lisa Icon"
          width={18}
          height={18}
        />
        <h1 className="font-fairplay text-xl font-medium text-brown-light group-hover:text-blue-dark">
          Guess the Painting
        </h1>
      </Link>
      <InfoBox />
      <QuestionBox />
    </div>
  );
};

export default Header;
