import { Link } from "react-router-dom";

function Success() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: `url('https://img.freepik.com/premium-photo/abstract-white-background_71374-1751.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center rounded-top"
        style={{
          height: "250px",
          width: "600px",
          backgroundColor: "#22BB33",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check-circle"
          viewBox="0 0 16 16"
          style={{ height: "200px", width: "200px", color: "white" }}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
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
        <p style={{ fontSize: "2rem" }}>Payment Successful!</p>
        <Link to="/" ><button className="btn btn-outline-info">Back to Store</button></Link>
      </div>
    </div>
  );
}

export default Success;
