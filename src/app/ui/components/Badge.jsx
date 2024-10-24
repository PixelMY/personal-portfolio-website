import clsx from "clsx";
import Image from "next/image";

export default function Badge({ src, alt, brand, children }) {
  return (
    <div
      className={clsx(
        "flex gap-2 items-center py-2 px-3 border rounded-lg flex-shrink-0",
        {
          "border-foreground": brand === "nextjs",
          "border-tailwind": brand === "tailwind",
          "border-typescript": brand === "typescript",
          "border-postgres": brand === "postgres",
        }
      )}
    >
      <Image src={src} height={18} width={18} alt={alt} />

      <p className="tracking-widest text-sm text-nowrap">{children}</p>
    </div>
  );
}
