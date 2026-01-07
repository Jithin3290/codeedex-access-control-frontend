import api from "../api/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"; 

export default function AssignRole() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await api.get("admin/users/");
        const rolesRes = await api.get("admin/roles/");
        setUsers(usersRes.data);
        setRoles(rolesRes.data);
      } catch (error) {
        toast.error("Failed to load data");
      }
    };
    fetchData();
  }, []);

  const assign = async () => {
    if (!userId || !roleId) {
      toast.error("Please select both user and role");
      return;
    }

    try {
      await api.post("admin/users/assign-role/", {
        user_id: userId,
        role_id: roleId,
      });
      toast.success("Role assigned successfully");
      setUserId("");
      setRoleId("");
    } catch (error) {
      toast.error("Forbidden: You don't have permission");
    }
  };

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
    select: {
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
    }
  };

  const isButtonDisabled = !userId || !roleId;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Assign Role</h3>

      <select 
        style={styles.select} 
        onChange={e => setUserId(e.target.value)}
        value={userId}
      >
        <option value="">Select user</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>
            {u.username}
          </option>
        ))}
      </select>

      <select 
        style={styles.select} 
        onChange={e => setRoleId(e.target.value)}
        value={roleId}
      >
        <option value="">Select role</option>
        {roles.map(r => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>

      <button 
        style={isButtonDisabled ? styles.disabledButton : styles.button}
        onClick={assign}
        disabled={isButtonDisabled}
      >
        Assign
      </button>
    </div>
  );
}