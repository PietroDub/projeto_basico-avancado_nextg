import NavBar from "@/components/NavBar";
import Link from "next/dist/client/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre o site",
};

export default function About() {
  return (
    <div className="flex flex-col align-top max-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <NavBar /> */}
      <main>
        <h1>Página Sobre</h1>
        <Link href="/sobre/sobreEmpresa">Vá para o Sobre empresa</Link>
      </main>
    </div>
  );
}