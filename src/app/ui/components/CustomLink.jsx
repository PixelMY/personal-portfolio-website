import clsx from "clsx";
import Link from "next/link";

export default function CustomLink({ children, isFilled = false, iconRight }) {
  return (
    <Link
      href="#"
      className={clsx(
        "font-mono text-lg tracking-widest py-1 font-extralight",
        {
          "border-b text-foreground hover:text-accent-500 hover:border-accent-500":
            !isFilled,
          "bg-foreground text-background px-4 rounded-lg font-semibold hover:bg-accent-500":
            isFilled,
        }
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {children}

        {iconRight}
      </div>
    </Link>
  );
}
