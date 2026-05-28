import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function SobreEmpresa() {
  return (
    <div className="flex flex-col align-top max-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <NavBar /> */}
      <main>
        <h1>Sobre a Empresa</h1>
        <Link href="/">Vá para a home</Link>
      </main>
    </div>
  );
}