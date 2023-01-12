import { useAddTaskMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [createTask] = useAddTaskMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;

    createTask({
      title,
      description,
    });

    navigate("/todo-frontend-react-rtk");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="form-group">
            <label className="form-label mt-4">Title</label>
            <input
              name="title"
              className="form-control"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTask;
