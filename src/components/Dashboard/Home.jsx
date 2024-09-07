import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function EmployeeList() {
    const navigate=useNavigate()
  const [employees, setEmployees] = useState([
    {
      _id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      position: 'Software Engineer',
      department: 'IT',
      dateOfJoining: '2020-01-15',
    },
    {
      _id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      position: 'HR Manager',
      department: 'HR',
      dateOfJoining: '2018-03-10',
    },
    // Add more employees for testing pagination
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5); // Number of employees per page

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange({ ...dateRange, [name]: value });
  };

  // Filter employees based on search term and date range
  const filteredEmployees = employees.filter((employee) => {
    const matchesName = `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDate =
      (!dateRange.startDate ||
        new Date(employee.dateOfJoining) >= new Date(dateRange.startDate)) &&
      (!dateRange.endDate ||
        new Date(employee.dateOfJoining) <= new Date(dateRange.endDate));

    return matchesName && matchesDate;
  });

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  return (
    <>
      <nav className="bg-[#E9522C] p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-2xl">Employee List</div>
        </div>

        <div className="flex items-center">
          <button
            onClick={() =>{navigate('/form')}}
            className="bg-orange-500 text-white px-3 py-1 rounded mr-4"
          >
            Add Employee
          </button>
        </div>
      </div>
    </nav>
      <div className="container mx-auto mt-5 min-h-full p-4 bg-[#282D2D] text-white">
        <div className="mb-4 flex flex-col justify-end md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gray-100 text-gray-900 p-2 rounded-md w-[250px] "
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="startDate"
              value={dateRange.startDate}
              onChange={handleDateChange}
              className="bg-gray-100 text-gray-900 p-2 rounded-md"
              placeholder="Start Date"
            />
            <input
              type="date"
              name="endDate"
              value={dateRange.endDate}
              onChange={handleDateChange}
              className="bg-gray-100 text-gray-900 p-2 rounded-md"
              placeholder="End Date"
            />
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
                  Last Name
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
                      {employee.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {employee.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {employee.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {employee.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {employee.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {employee.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {new Date(employee.dateOfJoining).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => openEditModal(employee)}
                      className="bg-blue-500 text-white hover:bg-blue-700 focus:outline-none px-2 py-1 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(employee._id)}
                      className="bg-red-500 text-white hover:bg-red-700 focus:outline-none px-2 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-4 text-center text-gray-400"
                  >
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? 'bg-[#E9522C] text-white'
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
