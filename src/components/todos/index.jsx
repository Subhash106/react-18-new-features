import { useFetchTodosQuery } from "../../store";

const Todos = () => {
  const { data: todos = [], isLoading } = useFetchTodosQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
