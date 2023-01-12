import "../styles/CardTask.css";
import { useDeleteTaskMutation, useUpdateDoneMutation } from "../api/apiSlice";

function CardTask({ title, description, done, id }) {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateDone] = useUpdateDoneMutation();
  return (
    <>
      <div className="card body-card">
        <div className="card-body d-flex justify-content-between flex-column">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between p-0">
            <button
              onClick={() => deleteTask(id)}
              className="btn btn-primary btn-sm"
            >
              Delete
            </button>
            {done ? (
              <button
                onClick={() => updateDone(id)}
                className="btn btn-success btn-sm"
              >
                Done
              </button>
            ) : (
              <button
                onClick={() => updateDone(id)}
                className="btn btn-danger btn-sm"
              >
                Undone
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTask;
