import { Link } from "react-router-dom";

export default function Home() {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      fontSize: '24px',
      marginBottom: '15px',
      color: '#333'
    },
    description: {
      fontSize: '16px',
      marginBottom: '25px',
      color: '#555',
      lineHeight: '1.5'
    },
    sectionTitle: {
      fontSize: '18px',
      marginBottom: '10px',
      marginTop: '20px',
      color: '#444',
      paddingBottom: '5px',
      borderBottom: '1px solid #eee'
    },
    list: {
      listStyle: 'none',
      padding: '0',
      margin: '0 0 15px 0'
    },
    listItem: {
      marginBottom: '8px'
    },
    link: {
      color: '#0066cc',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '5px 0',
      display: 'inline-block'
    },
    note: {
      marginTop: '30px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#666',
      borderLeft: '3px solid #6c757d'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Access Control Demo</h2>

      <p style={styles.description}>Use the links below to explore the system.</p>

      <h3 style={styles.sectionTitle}>Authentication</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
      </ul>

      <h3 style={styles.sectionTitle}>Admin Actions</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/admin/create-user" style={styles.link}>Create User</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/admin/assign-role" style={styles.link}>Assign Role</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/admin/audit" style={styles.link}>Audit Logs</Link>
        </li>
      </ul>

      <h3 style={styles.sectionTitle}>User Views</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/users" style={styles.link}>User List</Link>
        </li>
      </ul>

      <p style={styles.note}>
        Access is enforced by the backend. Unauthorized actions will return 403.
      </p>
    </div>
  );
}