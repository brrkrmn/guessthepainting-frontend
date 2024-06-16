import Link from "next/link";
import { SiBuymeacoffee } from "react-icons/si";
import { boxStyles } from "../constants";

const Coffee = () => {
  return (
    <Link
      target="_blank"
      href="https://buymeacoffee.com/berrakaraman"
      className={`${boxStyles} group flex w-fit items-center overflow-hidden border-none`}
    >
      <p className="hidden translate-x-[120%] text-nowrap font-fairplay group-hover:translate-x-0 mobile:block">
        Buy me a coffee!
      </p>
      <SiBuymeacoffee className="text-2xl" />
    </Link>
  );
};

export default Coffee;
