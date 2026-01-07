import api from "../api/api";
import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "" });

  useEffect(() => {
    api.get("accounts/users/")
      .then(res => {
        setUsers(res.data);
      })
      .catch(() => {
        setToast({ show: true, message: "Forbidden" });
        setTimeout(() => setToast({ show: false, message: "" }), 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    },
    title: {
      marginBottom: '25px',
      fontSize: '22px'
    },
    userCard: {
      padding: '15px',
      marginBottom: '10px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      backgroundColor: 'white'
    },
    loading: {
      textAlign: 'center',
      padding: '40px',
      color: '#666'
    },
    empty: {
      textAlign: 'center',
      padding: '40px',
      color: '#666',
      fontStyle: 'italic'
    },
    toast: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      backgroundColor: '#dc3545',
      color: 'white',
      borderRadius: '4px',
      zIndex: 1000,
      maxWidth: '300px'
    }
  };

  return (
    <div style={styles.container}>
      {toast.show && (
        <div style={styles.toast}>
          {toast.message}
        </div>
      )}

      <h3 style={styles.title}>Users</h3>

      {loading ? (
        <div style={styles.loading}>Loading users...</div>
      ) : users.length === 0 ? (
        <div style={styles.empty}>No users found</div>
      ) : (
        <div>
          {users.map(u => (
            <div key={u.id} style={styles.userCard}>
              {u.username}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}