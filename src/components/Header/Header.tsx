import { InfoBox } from "./components/InfoBox";
import { QuestionBox } from "./components/QuestionBox";

const Header = () => {
  return (
    <div className="max-w-600 flex h-fit w-full items-center justify-center gap-2 px-1">
      <h1 className="text-brown-light mr-auto self-start font-fairplay text-xl font-medium">
        Guess the Painting
      </h1>
      <InfoBox />
      <QuestionBox />
    </div>
  );
};

export default Header;
