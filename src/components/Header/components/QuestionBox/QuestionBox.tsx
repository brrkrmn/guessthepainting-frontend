import Modal from "@/components/Modal/Modal";
import { MdOutlineQuestionMark } from "react-icons/md";

const QuestionBox = () => {
  return (
    <Modal
      backgroundImage="imageBackground2"
      title="how to play"
      triggerIcon={<MdOutlineQuestionMark className="text-xl" />}
    >
      <p>
        For each game, you will see a zoomed-in part of a painting and try to
        guess which painting it is.
      </p>
      <p>
        You have 5 chances to guess correctly. For each chance, you will see a
        different part from the same painting.
      </p>
      <p>
        Hints will be provided on your 3rd, 4th, and 5th guesses. If you cannot
        guess the painting correctly after 5 tries, the correct answer will be
        revealed.
      </p>
      <p className="mb-44">Have Fun!</p>
    </Modal>
  );
};

export default QuestionBox;
