import { InfoBox } from "./components/InfoBox";
import { QuestionBox } from "./components/QuestionBox";

const Header = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center gap-2 px-1">
      <h1 className="font-fairplay mr-auto self-start text-xl font-medium text-[#73664fb8]">
        Guess the Painting
      </h1>
      <InfoBox />
      <QuestionBox />
    </div>
  );
};

export default Header;
