const Todos = ({ todos }) => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
