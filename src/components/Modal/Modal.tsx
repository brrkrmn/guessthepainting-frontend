"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseSharp } from "react-icons/io5";
import { boxStyles } from "../Header/components/constants";

type ComponentProps = {
  triggerIcon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  backgroundImage: string;
};

const Modal = ({
  title,
  triggerIcon,
  backgroundImage,
  children,
}: ComponentProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${boxStyles}`}>{triggerIcon}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-black/70" />
        <Dialog.Content
          className={`${backgroundImage} bg-background fixed left-[50%] top-[50%] z-20 flex h-[70vh] w-full max-w-[600px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start overflow-hidden rounded-lg px-20 pt-16`}
        >
          <Dialog.Title className="text-brown-main text-center font-fairplay text-4xl">
            GUESS THE PAINTING
            <p className="text-blue-dark text-center text-2xl">{title}</p>
          </Dialog.Title>
          <Dialog.Description className="text-brown-main z-20 mb-5 mt-6 flex flex-col items-center justify-center gap-4 text-center font-fairplay text-lg leading-normal *:font-fairplay *:text-lg">
            {children}
          </Dialog.Description>
          <Dialog.Close className="absolute right-4 top-4" asChild>
            <button className={`${boxStyles}`}>
              <IoCloseSharp className="text-xl" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
