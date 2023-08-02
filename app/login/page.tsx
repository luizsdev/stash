import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Login() {
  return (
    <main className="min-h-screen flex w-screen">
      <div className="w-1/2 h-screen bg-slate-800 flex justify-center items-center">
        <Image width="600" height="500" alt="saving" src="./saving.svg" />
      </div>
      <div className="w-1/2 h-screen bg-slate-100 flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col gap-5">
          <p className="text-3xl text-center">Stash</p>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <div className="flex justify-start items-center gap-5">
            <input type="checkbox" className="" />
            <p className="font-sm">Remember Me</p>
          </div>
          <div className="flex gap-10 justify-start items-center">
            <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white px-5 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
