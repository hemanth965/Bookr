import { useContext } from "react";
import { Context1 } from "./context";
import Book from "./Book";

function ListOut() {
  const { book, setBook } = useContext(Context1);
  console.log(book);
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-indigo-500  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee Id
            </th>
            <th scope="col" className="px-6 py-3">
              Employee FirstName
            </th>
            <th scope="col" className="px-6 py-3">
              Employee last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {book.map((item) => {
            return <Book key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListOut;
