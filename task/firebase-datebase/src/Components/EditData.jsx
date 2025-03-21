import  { useEffect, useState } from "react";
import { ref, set, get } from "firebase/database";
import { database } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

function EditData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await get(ref(database, `details/users/${id}`));
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
    };
    fetchData();
  }, [id]);

  const saveEdit = async () => {
    await set(ref(database, `details/users/${id}`), userData);
    navigate("/read");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Edit User Data</h2>
      <input
        type="text"
        placeholder="First Name"
        value={userData.firstName}
        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={userData.lastName}
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={saveEdit} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Save Changes
      </button>
    </div>
  );
}

export default EditData;
