// import { useState } from "react";
// import { registerUser } from "../services/api";
// import { useRouter } from "next/router";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     try {
//       await registerUser({ email, password });
//       router.push("/login");
//     } catch (error) {
//       console.error("Registration Failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// }
// import { useState } from "react";
// import { registerUser } from "../services/api";
// import { useRouter } from "next/router";

// export default function Register() {
//   const [name, setName] = useState("");  // 🔹 Added name field
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     try {
//       await registerUser({ name, email, password });  // 🔹 Include name
//       router.push("/login");
//     } catch (error) {
//       console.error("Registration Failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />  {/* 🔹 Name input */}
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// }


import { useState } from "react";
import { registerUser } from "../services/api";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState(""); // 🔹 Added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser({ name, email, password }); // 🔹 Include name
      router.push("/login");
    } catch (error) {
      console.error("Registration Failed", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create an Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleRegister}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.background = "#218838")}
          onMouseOut={(e) => (e.target.style.background = "#28a745")}
        >
          Register
        </button>
        <p style={styles.loginRedirect}>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "350px",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  loginRedirect: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
