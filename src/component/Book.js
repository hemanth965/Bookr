import { useContext } from "react";
import { Context1 } from "./context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Book({ item }) {
  const navigate = useNavigate();
  function handleClick(id) {
    console.log("it is the thing i am expecting " + id);
    navigate(`/AddEmployeeComponent/${id}`);
  }
  function deleteEmployee(id) {
    const host = "https://empowering-wholeness-production.up.railway.app";
    const users = async () => {
      axios
        .delete(`${host}/api/v1/employees/${id}`)
        .then((response) => {
          console.log("it is in the deleteEmployee");
        })
        .catch((error) => console.log(error));
    };
    users();
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 bg-gradient-to-r from-indigo-500  dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item.id}
      </th>
      <td className="px-6 py-4">{item.firstName}</td>
      <td className="px-6 py-4">{item.secondName}</td>
      <td className="px-6 py-4">{item.email}</td>

      <td className="px-6 py-4">
        <button
          onClick={() => handleClick(`${item.id}`)}
          className="hover:shadow-form w-full  rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Update
        </button>
        <button
          onClick={() => deleteEmployee(`${item.id}`)}
          className="hover:shadow-form w-full mt-2  rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default Book;
