import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-10 h-2/5">
      <img className="w-64 h-64" src={logo} alt="Logo do MyDuo" />
      <h1 className="font-sans font-black text-5xl">
        Seu <span className="uppercase">duo</span> está aqui.
      </h1>
    </header>
  );
}
