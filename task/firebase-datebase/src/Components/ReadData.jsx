import  { useState } from "react";
import { ref, get, remove, child } from "firebase/database";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

function ReadData() {
  const [userArray, setUserArray] = useState([]);
  const navigate = useNavigate();

  const dispData = async () => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "details/users"));
    if (snapshot.exists()) {
      setUserArray(Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, key })));
    } else {
      console.log("No data available");
    }
  };

  const handleDelete = async (key) => {
    await remove(ref(database, `details/users/${key}`));
    dispData(); // Refresh Data
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Users List</h2>
      <button onClick={dispData} className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2">
        Display Data
      </button>
      <ul>
        {userArray.map((user) => (
          <li key={user.key} className="flex justify-between p-2 border-b">
            <span>{user.firstName} {user.lastName}</span>
            <div>
              <button onClick={() => navigate(`/edit/${user.key}`)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                Edit
              </button>
              <button onClick={() => handleDelete(user.key)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadData;
