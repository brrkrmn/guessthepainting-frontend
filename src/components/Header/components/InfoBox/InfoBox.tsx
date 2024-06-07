import { Modal } from "@/components/Modal";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { IoInformationOutline, IoMail } from "react-icons/io5";
import { boxStyles } from "../constants";

const InfoBox = () => {
  return (
    <Modal
      title="about"
      triggerIcon={<IoInformationOutline className="text-xl" />}
      backgroundImage="imageBackground1"
    >
      <div className="flex h-full flex-col items-center">
        <p>
          Guess the Painting is a guessing game that presents a new painting
          every day. You can reach out via email to submit paintings that you
          want to see in the coming games.
        </p>
        <div className="my-8 flex items-center justify-center gap-10">
          <Link
            aria-label="Link to email"
            className={`!h-12 !w-12 rounded-lg ${boxStyles}`}
            href="mailto:esma.berra.karaman@hotmail.com?subject=Guess%20The%20Painting%20Help%20and%20Feedback"
          >
            <IoMail className="text-3xl " />
          </Link>
          <Link
            aria-label="Link to project repo"
            className={`!h-12 !w-12 rounded-lg ${boxStyles}`}
            href="https://github.com/brrkrmn/guessthepainting-frontend"
          >
            <FaGithub className="text-3xl " />
          </Link>
          <Link
            aria-label="Link to creator's linkedin"
            className={`!h-12 !w-12 rounded-lg ${boxStyles}`}
            href="https://www.linkedin.com/in/berra-karaman-3936471b0/"
          >
            <GrLinkedin className="text-2xl" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] leading-snug">
          <p>
            Inspired by{" "}
            <a className="text-blue-dark" href="https://guessthe.game/">
              GuessThe.Game
            </a>{" "}
            and{" "}
            <a className="text-blue-dark" href="https://pictdle.com/#/">
              Pictdle
            </a>
          </p>
          <p>Made by Berra Karaman</p>
        </div>
      </div>
    </Modal>
  );
};

export default InfoBox;
