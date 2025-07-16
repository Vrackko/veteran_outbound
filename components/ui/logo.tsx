import Link from "next/link";
import { MdMilitaryTech } from "react-icons/md";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="Veteran Outbound">
      <MdMilitaryTech className="h-6 w-6 text-indigo-500" />
      <span className="font-nacelle text-lg font-semibold text-gray-200">
        Outbound Veteran
      </span>
    </Link>
  );
}