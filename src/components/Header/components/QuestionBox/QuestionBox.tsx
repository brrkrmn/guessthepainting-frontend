import { MdOutlineQuestionMark } from "react-icons/md";
import { boxStyles } from "../constants";

const QuestionBox = () => {
  return (
    <button className={`${boxStyles}`}>
      <MdOutlineQuestionMark className="text-md" />
    </button>
  );
};

export default QuestionBox;
