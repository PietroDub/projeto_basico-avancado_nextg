import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function comentario({ params }: Props) {
    const id = await params;
    return (
        <div>
            <h1>Comentário: {id.id}</h1>
            <p>Este é o conteúdo do comentário.</p>
            {/* <Link href={`/todos/${id.id}`}>
                Voltar para a tarefa
            </Link> */}
        </div>
    );
}