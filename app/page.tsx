import Link from "next/dist/client/link";
import Image from "next/image";
import NavBar from "../components/NavBar";

const data = [
  {
    nome: "Pedro",
    idade: 20
  },
    {
    nome: "Pietro",
    idade: 19
  },
    {
    nome: "Anna",
    idade: 19
  }
]
export default function Home() {
  return (
    <div className="flex flex-col align-top max-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <NavBar /> */}
      <main>
        <h1>HELLO WORLD!</h1>

        <table className="border-2 border-zinc-300 p-5">
          <tr className="">
            <th>Nome</th>
            <th>Idade</th>
          </tr>
          {/* testando o tsx */}
          {
          data.map(element => (
            <tr key={element.nome}>
              <td>{element.nome}</td>
              <td>{element.idade}</td>
            </tr>
          ))
          }
        </table>
          <Link href="/sobre">Vá para o Sobre</Link>
      </main>
    </div>
  );
}
