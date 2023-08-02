import { Button } from "../Button";

export function Navbar() {
  return (
    <nav className="text-white h-16 flex justify-between items-center py-3 px-6">
      <p className="text-2xl">Stash</p>

      <div className="flex gap-5 justify-center items-center">
        <a href="" className="underline">
          About
        </a>
        <a href="" className="underline">
          Pricing
        </a>
        <Button text="Login" />
      </div>
    </nav>
  );
}
