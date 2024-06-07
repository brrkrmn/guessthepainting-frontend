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
      className={`border-brown-dark text-brown-dark bg-background-transparent flex h-8 min-w-20 items-center justify-center rounded-2xl border-2 px-2 text-lg font-semibold ${disabled && "pointer-events-none opacity-0"} hover:text-background-dark hover:bg-brown-light font-fairplay shadow-xl transition`}
    >
      {label}
    </Link>
  );
};

export default NavigationButton;
