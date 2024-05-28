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
      className={`rounded-lg border-2 border-black ${disabled && "pointer-events-none	"}`}
    >
      {label}
    </Link>
  );
};

export default NavigationButton;
