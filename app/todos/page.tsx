// Cria um "tipo" chamado Todo.
// Isso define o formato que cada item da lista deve ter.
type Todo = {

  // O id deve ser um número
  id: number

  // O title deve ser uma string/texto
  title: string
}

// Função assíncrona responsável por buscar os dados da API
async function getTodos(): Promise<Todo[]> {

  // Faz uma requisição HTTP para a API
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos",

    // Configurações da requisição
    {
      // "force-cache" = o Next vai salvar/cachear
      // essa resposta para reutilizar depois.
      // Isso deixa a página mais rápida e estática.
      cache: "force-cache",
    }
  )

  // Converte a resposta da API para JSON
  // e retorna os dados.
  // Promise<Todo[]> significa:
  // "vai retornar um array/lista de Todo"
  return response.json()
}

export const metadata = {
    title: "Todo-list",
    description: "Lista de tarefas pendentes",
}

export default async function Todos() {
    const todos = await getTodos()
    return (
        <div className="flex flex-col align-top max-h-screen items-center justify-center font-sans">
            <h1 className="text-2xl font-bold">Tarefas pendentes:</h1>
            <ul className="list-disc list-inside">
                {(todos.slice(0, 10)).map((item) => (
                    <li key={item.id} className="text-lg">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}