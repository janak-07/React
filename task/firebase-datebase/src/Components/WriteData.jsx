import  { useState } from "react";
import { database } from "../firebase"; 
import { ref, set } from "firebase/database";

const WriteData = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const saveData = () => {
    const userId = new Date().getTime(); 

    set(ref(database, "users/" + userId), {
      firstName: firstName,
      lastName: lastName,
    })
      .then(() => {
        alert("Data saved successfully!");
        setFirstName("");
        setLastName("");
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Write User Data</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={saveData}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Save Data
      </button>
    </div>
  );
};

export default WriteData;
