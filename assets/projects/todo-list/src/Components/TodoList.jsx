import "../Styles/App.css";
import { Link, useNavigate } from "react-router-dom";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        {todos.length > 0 && (
          <>
            <div className="heading">TODO LIST</div>
            <hr />
          </>
        )}
        <div className="todo-list">
          {todos.map((todo, index) => {
            return (
              <div className="todo-item" key={index}>
                <span>
                  {todo.title}-{todo.description}({todo.estimation} hrs)
                </span>
                <div className="todo-icon">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      handleEdit(todo, index);
                      navigate("/");
                    }}
                  ></i>
                  <i
                    className={`fa-solid fa-trash`}
                    onClick={() => {
                      handleDelete(todo);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <button className="button-add">Go back</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default TodoList;
