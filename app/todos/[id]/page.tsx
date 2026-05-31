// Importa o componente Link do Next.js.
// Ele permite navegar entre páginas sem recarregar o navegador,
// diferente de uma tag <a> tradicional.
import Link from "next/link";


// Define um tipo TypeScript chamado Props.
// Esse tipo descreve quais propriedades (props)
// a página espera receber.
type Props = {

  // No Next 15, params pode chegar como uma Promise.
  // Essa Promise, quando resolvida, retorna um objeto.
  params: Promise<{

    // Como a pasta da rota é [id],
    // o Next cria automaticamente um parâmetro chamado id.
    id: string;

  }>;
};


// Componente principal da página.
// É async porque vamos usar await para obter os parâmetros.
export default async function TodoPage({ params }: Props) {

    // Aguarda a Promise de params ser resolvida.
    //
    // Exemplo:
    // URL: /todos/5
    //
    // params -> Promise<{ id: "5" }>
    //
    // após o await:
    // id -> { id: "5" }
    const id = await params;

    // Retorna o HTML/JSX da página.
    return (

        // Container principal.
        // Classes Tailwind:
        // flex -> usa Flexbox
        // flex-col -> organiza elementos em coluna
        // items-center -> centraliza horizontalmente
        // justify-center -> centraliza verticalmente
        // max-h-screen -> altura máxima da tela
        // font-sans -> fonte sem serifa
        <div className="flex flex-col align-top max-h-screen items-center justify-center font-sans">

            {/* 
              Exibe o ID capturado da URL.

              Se acessar:
              /todos/5

              id será:
              {
                id: "5"
              }

              Então:
              id.id = "5"
            */}
            <h1 className="text-2xl font-bold">
                Tarefa: {id.id}.
            </h1>

            <p>Comentário: lalala... <Link href={`/todos/${id.id}/comentarios/1`}>Detalhes</Link></p>

            {/* 
              Link para voltar para a página inicial.

              href="/"
              significa:
              http://localhost:3000/
            */}
            <Link href="/">
                Voltar para a lista de tarefas
            </Link>

        </div>
    )
}