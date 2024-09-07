import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api/stepperApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faUserPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const departments = [
  "Human Resources",
  "Finance",
  "Engineering",
  "Marketing",
  "Sales",
  "Customer Support",
  "Product Management",
  "Design",
  "IT",
];

const positions = [
  "Software Engineer",
  "Product Manager",
  "Designer",
  "Data Analyst",
  "HR Manager",
  "Marketing Specialist",
  "Sales Representative",
  "Customer Support Specialist",
  "Finance Analyst",
];

const departmentPositionsMap = {
  "Human Resources": ["HR Manager"],
  Finance: ["Finance Analyst"],
  Engineering: ["Software Engineer", "Data Analyst"],
  Marketing: ["Marketing Specialist"],
  Sales: ["Sales Representative"],
  "Customer Support": ["Customer Support Specialist"],
  "Product Management": ["Product Manager"],
  Design: ["Designer"],
  IT: ["Software Engineer", "Data Analyst"],
};

function EmployeeList() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specificDate, setSpecificDate] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await Api.get("fetchdetail");
        setEmployees(response.data);
      } catch (error) {
        setError("Error fetching employee data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDateChange = (e) => {
    setSpecificDate(e.target.value);
  };

  const handleDepartmentFilter = (e) => {
    setDepartmentFilter(e.target.value);
    setPositionFilter("");
  };

  const handlePositionFilter = (e) => {
    setPositionFilter(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesName =
      `${employee.personalDetails.firstName} ${employee.personalDetails.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDate =
      !specificDate ||
      new Date(employee.employment.dateOfJoining).toDateString() ===
        new Date(specificDate).toDateString();

    const matchesDepartment =
      !departmentFilter || employee.employment.department === departmentFilter;

    const matchesPosition =
      !positionFilter || employee.employment.position === positionFilter;

    return matchesName && matchesDate && matchesDepartment && matchesPosition;
  });

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await Api.delete(`/delete_Employee/${id}`);
        if (response.status === 200) {
          toast.success("Employee deleted successfully");
          setEmployees(employees.filter((employee) => employee._id !== id));
        }
      } catch (error) {
        setError("Error deleting employee. Please try again later.");
      }
    }
  };

  const filteredPositions = departmentFilter
    ? departmentPositionsMap[departmentFilter]
    : positions;

  return (
    <>
      <nav className="bg-[#E9522C] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">Employee List</div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => navigate("/form")}
              className="bg-orange-500 text-white px-3 font-extrabold py-1 rounded mr-4"
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              Add Employee
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-5 min-h-full p-4 bg-[#282D2D] text-white">
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <div className="mb-4 flex flex-col justify-end md:flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="searchName" className="text-gray-300 mb-1">
                  Search by Name
                </label>
                <input
                  id="searchName"
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="bg-gray-100 text-gray-900 p-2 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dateOfJoining" className="text-gray-300 mb-1">
                  Date of Joining
                </label>
                <input
                  id="dateOfJoining"
                  type="date"
                  value={specificDate}
                  onChange={handleDateChange}
                  className="bg-gray-100 text-gray-900 p-2 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="departmentFilter"
                  className="text-gray-300 mb-1"
                >
                  Filter by Department
                </label>
                <select
                  id="departmentFilter"
                  value={departmentFilter}
                  onChange={handleDepartmentFilter}
                  className="bg-gray-100 text-gray-900 p-2 rounded-md"
                >
                  <option value="">All Departments</option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="positionFilter" className="text-gray-300 mb-1">
                  Filter by Position
                </label>
                <select
                  id="positionFilter"
                  value={positionFilter}
                  onChange={handlePositionFilter}
                  className="bg-gray-100 text-gray-900 p-2 rounded-md"
                >
                  <option value="">All Positions</option>
                  {filteredPositions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto bg-gray-800 rounded-lg p-4 shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 text-white">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      First Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Date of Birth
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Date of Joining
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {currentEmployees.length > 0 ? (
                    currentEmployees.map((employee) => (
                      <tr key={employee._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                          {employee.personalDetails.firstName +
                            " " +
                            employee.personalDetails.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                          {employee.personalDetails.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                          {employee.personalDetails.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                          {employee.employment.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                          {employee.employment.department}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                          DOB:{" "}
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(employee.personalDetails.dateOfBirth)
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                          JOINED:{" "}
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(employee.employment.dateOfJoining)
                          )}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => navigate(`/edit/${employee._id}`)}
                            className="text-blue-500 hover:text-blue-700 mr-4"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            onClick={() => handleDelete(employee._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No employees found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-600 text-white px-3 py-1 rounded disabled:opacity-50"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-600 text-white px-3 py-1 rounded disabled:opacity-50"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default EmployeeList;
