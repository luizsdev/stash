import { AlignJustify } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-5">
      <h1 className="text-white text-lg font-semibold">Stash</h1>
      <AlignJustify color="white" />
    </nav>
  );
}
