import "./../Styles/App.css";
import { useNavigate } from "react-router-dom";

const AddTodo = ({
  todoObj,
  todos,
  newTodo,
  editIndex,
  setNewTodo,
  setTodos,
  errors,
  setErrors,
  setEditIndex,
}) => {
  const navigate = useNavigate();

  const getInput = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };
  const emptyInputs = Object.values(newTodo).some((e) => e === "");
  const handleForm = (event) => {
    event.preventDefault();

    if (emptyInputs) {
      Object.keys(newTodo).forEach((iter) => {
        setErrors((error) => ({
          ...error,
          [iter]:
            newTodo[iter] === "" ? "Enter valid" + ` ${iter} ` + "input" : "",
        }));
      });
    } else {
      if (editIndex !== null) {
        const updatedTodos = todos.map((todo, index) =>
          index == editIndex ? newTodo : todo,
        );
        setTodos(updatedTodos);
        setEditIndex(null);
        setNewTodo(todoObj);
        navigate("/lists");
      } else {
        setTodos([...todos, newTodo]);
        setNewTodo(todoObj);
        navigate("/lists");
      }
    }
  };

  return (
    <>
      <div className="content">
        <div className="heading">ADD TODO</div>
        <hr />
        <form className="content-form" onSubmit={handleForm}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={newTodo.title}
            onChange={getInput}
          />
          <p className="errorMessage">{errors.title}</p>
          <br />
          <input
            name="estimation"
            type="number"
            placeholder="Estimation(hrs)"
            value={newTodo.estimation}
            onChange={getInput}
          />
          <p className="errorMessage">{errors.estimation}</p>
          <br />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={newTodo.description}
            onChange={getInput}
          />
          <p className="errorMessage">{errors.description}</p>
          <br />
          <button className="button-add">
            {editIndex === null ? "ADD" : "UPDATE"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
