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
      className={`flex h-8 min-w-20 items-center justify-center rounded-2xl border-2 border-[#390202] bg-[#f3f2ea66] px-2 font-normal text-[#390202] ${disabled && "pointer-events-none	"} font-serif shadow-xl transition hover:bg-[#39020299] hover:font-normal hover:text-[#fff1e7]`}
    >
      {label}
    </Link>
  );
};

export default NavigationButton;
