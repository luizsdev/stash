type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <a
      href="/login"
      className="bg-white text-slate-800 p-3 rounded-lg h-7 flex justify-center items-center hover:bg-slate-700 hover:text-white transition-colors"
    >
      {text}
    </a>
  );
}
