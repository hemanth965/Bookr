import { useEffect, useState } from "react";
import { Context1 } from "./component/context";
import ListOut from "./component/list";
import axios from "axios";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AddEmployee from "./component/AddEmployeeComponent";

function Main() {
  return (
    <div>
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppBar />}></Route>

            <Route path="/AddEmployeeComponent/:id" element={<AddEmployee />} />
            <Route path="/AddEmployeeComponent" element={<AddEmployee />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
function AppBar() {
  const getUsers = async () => {
    const datac = await axios.get("http://localhost:8080/api/v1/employees/");
    console.log(datac);
    setBook(datac.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  function handleClick() {
    navigate("/AddEmployeeComponent");
  }
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        className="bg-blue-500 mb-5 ml-96 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add a Employee
      </button>
      <Context1.Provider value={{ book, setBook }}>
        <ListOut />
      </Context1.Provider>
    </div>
  );
}
export default Main;
