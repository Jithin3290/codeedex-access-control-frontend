import api from "../api/api";
import { useEffect, useState } from "react";

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await api.get("admin/audit/");
        setLogs(res.data);
      } catch (error) {
        showToast("Access denied");
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto'
    },
    title: {
      marginBottom: '25px',
      fontSize: '22px'
    },
    logContainer: {
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    logHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      padding: '12px 15px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e0e0e0',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    logRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      padding: '12px 15px',
      borderBottom: '1px solid #f0f0f0'
    },
    logRowLast: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      padding: '12px 15px'
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

      <h3 style={styles.title}>Audit Logs</h3>

      {loading ? (
        <div style={styles.loading}>Loading audit logs...</div>
      ) : logs.length === 0 ? (
        <div style={styles.empty}>No audit logs found</div>
      ) : (
        <div style={styles.logContainer}>
          <div style={styles.logHeader}>
            <div>Actor</div>
            <div>Action</div>
            <div>Target</div>
          </div>
          {logs.map((l, i) => (
            <div 
              key={i} 
              style={i === logs.length - 1 ? styles.logRowLast : styles.logRow}
            >
              <div>{l.actor}</div>
              <div>{l.action}</div>
              <div>{l.target}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}