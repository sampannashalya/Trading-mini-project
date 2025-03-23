// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to Trading App</h1>
//       <Link href="/login"><button>Login</button></Link>
//       <Link href="/register"><button>Register</button></Link>
//     </div>
//   );
// }


import Link from "next/link";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h1 style={styles.heading}>🚀 Welcome to Trading App</h1>
        <p style={styles.description}>
          The ultimate platform to manage your stock portfolio efficiently.
        </p>

        <div style={styles.buttonContainer}>
          <Link href="/login">
            <button
              style={styles.button}
              onMouseOver={(e) => (e.target.style.boxShadow = "0 0 20px #007bff")}
              onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            >
              Login
            </button>
          </Link>
          <Link href="/register">
            <button
              style={styles.buttonGreen}
              onMouseOver={(e) => (e.target.style.boxShadow = "0 0 20px #28a745")}
              onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            >
              Register
            </button>
          </Link>
        </div>
      </div>

      <footer style={styles.footer}>
        Made with ❤️ by <span style={styles.name}>Sampanna Shalya & Yash Poddar</span>
      </footer>
    </div>
  );
}

// Exporting only once ✅
export default Home;

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(45deg, #1e3c72, #2a5298, #ff758c, #ff7eb3)",
    backgroundSize: "300% 300%",
    animation: "gradientAnimation 10s ease infinite",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 0,
  },
  card: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "450px",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    zIndex: 1,
  },
  heading: {
    marginBottom: "10px",
    fontSize: "32px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    opacity: "0.8",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "14px 28px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease",
    outline: "none",
  },
  buttonGreen: {
    padding: "14px 28px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease",
    outline: "none",
  },
  footer: {
    position: "absolute",
    bottom: "20px",
    color: "white",
    fontSize: "14px",
    opacity: "0.8",
  },
  name: {
    fontWeight: "bold",
    color: "#ffeb3b",
  },
};
