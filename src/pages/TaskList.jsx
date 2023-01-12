import { useGetTasksQuery } from "../api/apiSlice";
import CardTask from "../components/CardTask";

function TaskList() {
  const { data, isError, isLoading, error } = useGetTasksQuery();

  if (isLoading)
    return (
      <div class="alert alert-dismissible alert-info">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Loading . . .</strong> Wait a moment while we load the data.
      </div>
    );
  else if (isError)
    return (
      <div className="alert alert-dismissible alert-primary">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Error</strong> {error.message}
      </div>
    );

  return (
    <div className="container d-flex justify-content-center h-100 flex-wrap">
      <div className="row">
        {data.results.map((task) => (
          <div className="col-md-4 m-auto" key={task._id}>
            <CardTask
              title={task.title}
              description={task.description}
              done={task.done}
              id={task._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
