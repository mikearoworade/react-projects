import { useGetTodosQuery, useAddTodoMutation } from './services/api';

export default function TodoList() {
    const { data = [], error, isLoading } = useGetTodosQuery();
    const [addTodo] = useAddTodoMutation();

    if (isLoading) return <p>Loading…</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <button
                onClick={() => addTodo({ title: 'New Todo', completed: false })}
            >
                Add Todo
            </button>
            <ul>
                {data.slice(0, 5).map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
