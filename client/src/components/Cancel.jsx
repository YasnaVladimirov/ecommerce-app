import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: `url('https://img.freepik.com/premium-photo/abstract-white-background_71374-1751.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center rounded-top"
        style={{
          height: "250px",
          width: "600px",
          backgroundColor: "#BB2124",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
          style={{ height: "200px", width: "200px", color: "white" }}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center rounded-bottom"
        style={{
          height: "150px",
          width: "600px",
          backgroundColor: "white",
        }}
      >
        <p style={{ fontSize: "2rem" }}>Something Went Wrong!</p>
        <Link to="/">
          <button className="btn btn-outline-dark">Back to Store</button>
        </Link>
      </div>
    </div>
  );
}

export default Cancel;
