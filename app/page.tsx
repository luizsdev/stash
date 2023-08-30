import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="min-w-full flex gap-2 flex-col items-center justify-center px-4">
        <p className="text-[#818CF8] text-lg">Expenses Tracking Tool</p>
        <h1 className="text-white text-4xl text-center font-bold">
          Track all of your expenses
        </h1>
        <p className="text-center text-[#CBD5E1] text-sm mt-2">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="flex gap-4">
          <Button bgColor="#4F46E5" text="Start for free" />
          <Button bgColor="#475569" text="Request Info" />
        </div>
      </section>
    </main>
  );
}
