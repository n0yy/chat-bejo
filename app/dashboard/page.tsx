// app/dashboard/page.tsx
"use client";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardContent() {
  const [rowData, setRowData] = useState([
    {
      name: "Danang Hapis Fadillah",
      password: "password_encrypted",
      division: "Manufacturing Development",
      role: "superadmin",
      levelKnowledge: "Ultra",
      status: "Approved",
    },
    {
      name: "John Doe",
      password: "password_encrypted",
      division: "Engineering",
      role: "user",
      levelKnowledge: "Low",
      status: "Pending",
    },
    {
      name: "Jane Smith",
      password: "password_encrypted",
      division: "HR",
      role: "admin",
      levelKnowledge: "Medium",
      status: "Approved",
    },
    {
      name: "Robert Johnson",
      password: "password_encrypted",
      division: "Finance",
      role: "user",
      levelKnowledge: "High",
      status: "Rejected",
    },
  ]);

  const handleStatusChange = (index: number, newStatus: string) => {
    const newData = [...rowData];
    newData[index].status = newStatus;
    setRowData(newData);
  };

  const handleLevelKnowledgeChange = (index: number, newLevel: string) => {
    const newData = [...rowData];
    newData[index].levelKnowledge = newLevel;
    setRowData(newData);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex min-h-screen ">
      <aside
        className={`relative shadow-lg w-3/12 lg:w-2/12 min-h-screen p-5 lg:p-7 bg-white`}
      >
        <header className="flex">
          <h1 className="text-xl lg:text-2xl font-bold uppercase">Dashboard</h1>
        </header>

        <nav className="mt-8">
          <ul className="space-y-2">
            <li>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                Users Management
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                Settings
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                Reports
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={`flex-1 p-6`}>
        <h1 className="text-2xl font-bold mb-6">Users Management</h1>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Password
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Division
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level Knowledge
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-xs">
                {rowData.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.password}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.division}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.levelKnowledge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
