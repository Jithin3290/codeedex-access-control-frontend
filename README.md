# Access Control & Permission Management – Frontend

This is the frontend application for the Access Control & Permission Management System.
It is built using React and Redux and communicates with a Django REST API.

The frontend does not enforce authorization rules. All access control decisions are enforced by the backend.
The UI reflects backend responses such as allowed actions or forbidden access.

---

## Tech Stack

- React
- Redux Toolkit
- React Router
- Axios
- React Toastify

---

## Features

- User authentication using JWT
- Admin and User views
- Admin can:
  - Create users
  - Assign roles to users
  - View audit logs
- Users can:
  - Log in
  - View data based on assigned permissions and scope
- Toast notifications for success and error feedback
- Backend-enforced access control (403 responses handled in UI)

---



