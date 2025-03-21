import  { useState } from "react";
import { ref, set, push } from "firebase/database";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

function WriteData() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const saveData = async () => {
    const dbRef = ref(database, "details/users");
    const newDbRef = push(dbRef);
    await set(newDbRef, { firstName, lastName });
    alert("Data Saved Successfully");
    navigate("/read");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Write User Data</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={saveData} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Save Data
      </button>
    </div>
  );
}

export default WriteData;
