import Link from "next/link";

const NavigationButton = ({
  label,
  href,
  disabled,
}: {
  label: string;
  href: string;
  disabled: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`flex h-8 min-w-20 items-center justify-center rounded-2xl border-2 border-brown-dark bg-background-transparent px-2 text-lg font-semibold text-brown-dark ${disabled && "pointer-events-none opacity-0"} font-fairplay shadow-xl transition hover:bg-brown-light hover:text-background-dark`}
    >
      {label}
    </Link>
  );
};

export default NavigationButton;
