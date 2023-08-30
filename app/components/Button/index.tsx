type ButtonProps = {
  text: string;
  bgColor: string;
};

export function Button({ text, bgColor }: ButtonProps) {
  return (
    <a
      href="/login"
      className={` bg-[${bgColor}] text-white min-w-[172px] text-base  rounded-xl h-12 flex justify-center items-center hover:bg-slate-700 hover:text-white transition-colors`}
    >
      {text}
    </a>
  );
}
