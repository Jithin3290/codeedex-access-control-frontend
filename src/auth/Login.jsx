import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    dispatch(login({ username, password }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      background: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      textAlign: 'center',
      marginBottom: '25px',
      color: '#333',
      fontSize: '24px'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      marginBottom: '15px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '5px'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <input
          style={styles.input}
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          style={styles.button}
          onClick={submit}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Login
        </button>
      </div>
    </div>
  );
}