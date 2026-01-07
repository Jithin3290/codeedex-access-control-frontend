import api from "../api/api";
import { useState } from "react";
import react
export default function CreateUser() {
  const [username, setUsername] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const create = async () => {
    if (!username.trim()) {
      showToast("Please enter a username", "error");
      return;
    }

    try {
      await api.post("admin/users/create/", {
        username: username.trim(),
        password: "12345678",
      });
      showToast("User created successfully");
      setUsername("");
    } catch (error) {
      showToast("Access denied", "error");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      create();
    }
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto'
    },
    title: {
      marginBottom: '25px',
      fontSize: '22px'
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer'
    },
    disabledButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#cccccc',
      color: '#666666',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'not-allowed'
    },
    note: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#666'
    },
    toast: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      borderRadius: '4px',
      color: 'white',
      zIndex: 1000,
      maxWidth: '300px'
    },
    successToast: {
      backgroundColor: '#28a745'
    },
    errorToast: {
      backgroundColor: '#dc3545'
    }
  };

  const isButtonDisabled = !username.trim();

  return (
    <div style={styles.container}>
      {toast.show && (
        <div style={{
          ...styles.toast,
          ...(toast.type === "error" ? styles.errorToast : styles.successToast)
        }}>
          {toast.message}
        </div>
      )}

      <h3 style={styles.title}>Create User</h3>
      
      <input 
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      
      <button 
        style={isButtonDisabled ? styles.disabledButton : styles.button}
        onClick={create}
        disabled={isButtonDisabled}
      >
        Create User
      </button>
      
      <div style={styles.note}>
        Default password: <strong>12345678</strong>
      </div>
    </div>
  );
}