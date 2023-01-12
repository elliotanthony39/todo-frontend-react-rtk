import reactLogo from "../assets/react.svg";
import "../styles/About.css";

function About() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          This is a Full-Stack project.
          <br />
          For the Backend use nodeJS, ExpressJS and MongoDB.
          <br />
          For the Front-end use React, Redux Toolkit and Bootstrap as
          Bootswatch.
          <br />
          The backend is deployed in{" "}
          <a href="https://railway.app/" className="link">
            railway.app
          </a>
          , this service only allows it to be active for 500 hours per month.
          <br />
          Please add and delete your task, don't delete the rest ;-).
          <br />
          You can see the online Backend{" "}
          <a
            href="https://todo-backend-nodejs-mongodb-production.up.railway.app/"
            className="link"
          >
            here.
          </a>
          <br />
          The backend repository{" "}
          <a
            href="https://github.com/elliotanthony39/todo-backend-nodejs-mongodb"
            className="link"
          >
            here.
          </a>
          <br />
          Contact me on{" "}
          <a href="https://www.instagram.com/ynohtna.dev/" className="link">
            Instagram
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/elliotanthonymadariaga"
            className="link"
          >
            Linkedin.
          </a>
        </p>
        <div className="card-footer">
          <h3>Created by Elliot Anthony Madariaga</h3>
          <p>Click on the Vite and React logos to learn more</p>
        </div>
      </div>
    </div>
  );
}

export default About;
