import Image from "next/image";

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
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>HELLO WORLD!</h1>

        <table className="border-2 border-zinc-300 p-5">
          <tr className="">
            <th>Nome</th>
            <th>Idade</th>
          </tr>
          <tbody className="border-2 border-zinc-300 p-5 gap-x-5">
          {/* testando o tsx */}
          {
          data.map(element => (
            <tr key={element.nome}>
              <td>{element.nome}</td>
              <td>{element.idade}</td>
            </tr>
          ))
          }
          </tbody>
        </table>
      </main>
    </div>
  );
}
