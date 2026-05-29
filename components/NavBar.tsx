import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full h-16 bg-zinc-200 text-black flex items-center justify-center gap-x-5">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/sobre/sobreEmpresa">Sobre empresa</Link>
      <Link href="/todos">Todo-list</Link>
    </nav>
  );
}