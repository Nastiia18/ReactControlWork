import { useState } from "react";
import { getUsers, deleteUser, User } from "./apiMethods";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const usersData = await getUsers();
    setUsers(usersData);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <h2>Users from API:</h2>

      <button className="fetch-button" onClick={fetchUsers}>
        Get Users
      </button>

      <FilterBox filter={filter} setFilter={setFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={filteredUsers} onDelete={handleDelete} />
      )}
    </div>
  );
}
export default App;
