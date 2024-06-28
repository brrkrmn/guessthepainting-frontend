import Link from "next/link";
import { ReactNode } from "react";

const NavigationButton = ({
  label,
  icon,
  href,
  disabled,
  className,
}: {
  label: string;
  icon: ReactNode;
  href: string;
  disabled: boolean;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`flex h-10 w-10 max-w-20 items-center justify-center rounded-2xl border-2 border-brown-dark bg-background-transparent text-lg font-semibold text-brown-dark mobile:h-8 mobile:w-full mobile:px-2 ${disabled && "pointer-events-none opacity-0"} font-fairplay shadow-xl transition hover:bg-brown-light hover:text-background-dark ${className}`}
    >
      <span className="hidden mobile:block">{label}</span>
      <span className="flex items-center justify-center *:h-6 *:w-6 mobile:hidden">
        {icon}
      </span>
    </Link>
  );
};

export default NavigationButton;
