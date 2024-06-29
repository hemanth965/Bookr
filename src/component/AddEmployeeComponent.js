import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddEmployee() {
  const host = "https://empowering-wholeness-production.up.railway.app";
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const employeeId = Number(id);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, secondName, email };
    console.log(`employee id  ${employeeId}`);
    if (employeeId) {
      console.log(`sequence`);
      const users = async () => {
        axios
          .post(`${host}/api/v1/employees/${id}`, employee, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      users();
    } else {
      console.log("axios error");
      const users = async () => {
        axios
          .post(`${host}/api/v1/employees/`, employee)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      users();
    }

    navigate("/");
    console.log(employee);
  }
  useEffect(() => {
    if (id) {
      const users = async () => {
        const data = await axios
          .get(`${host}/api/v1/employees/${id}`)
          .then((response) => {
            setFirstName(response.data.firstName);
            setSecondName(response.data.secondName);
            setEmail(response.data.email);
          });

        console.log("ït is in use effect testing");
        console.log(data);
      };
      users();
    }
  }, []);
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form>
          <div className="mb-5">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="firstName"
              id="name"
              placeholder="Full Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="secondName"
              id="name"
              value={secondName}
              placeholder="Full Name"
              onChange={(e) => setSecondName(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
              onClick={(e) => saveEmployee(e)}
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddEmployee;
