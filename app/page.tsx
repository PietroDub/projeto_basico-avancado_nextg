import Link from "next/dist/client/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
// import Head from "next/head";

const data = [
  {
    nome: "Pedro",
    idade: 20,
  },
  {
    nome: "Pietro",
    idade: 19,
  },
  {
    nome: "Anna",
    idade: 19,
  },
];

// importando o tipo Metadata para definir os metadados da página, como título e descrição

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Página inicial do site",
};

export default function Home() {
  return (
    <>
      {/* //jeito antigo de usar o Head, que é necessário para páginas que não estão dentro do app */}
      {/* <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}

      <div className="flex flex-col align-top max-h-screen items-center justify-center font-sans">
        {/* <NavBar /> */}
        <main className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl font-bold">HELLO WORLD!</h1>

          <div className="w-full flex gap-20">
            <table className="w-full border border-zinc-300 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-zinc-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Nome</th>
                  <th className="px-6 py-3 text-left">Idade</th>
                </tr>
              </thead>

              <tbody>
                {data.map((element) => (
                  <tr
                    key={element.nome}
                    className="border-t border-zinc-200 hover:bg-zinc-100 hover:text-black transition-colors"
                  >
                    <td className="px-6 py-3">{element.nome}</td>
                    <td className="px-6 py-3">{element.idade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Image
              src="/images/jjk.jpg"
              width={300}
              height={200}
              alt="Descrição da imagem"
              className="rounded-lg shadow-md"
            />
          </div>
          <Link href="/sobre">Vá para o Sobre</Link>
        </main>
      </div>
    </>
  );
}
