"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import Link from "next/link";
import { neumorphism } from "@/utils/styles";
import { VscHistory } from "react-icons/vsc";

export default function Navigation() {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openHistoryModal = () => {
    setIsHistoryModalOpen(true);
  };

  const closeHistoryModal = () => {
    setIsHistoryModalOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
      <div className="fixed flex space-x-3 top-10 right-10">
        {/* Dashboard Link */}
        <Link href="/dashboard" className={`p-3 ${neumorphism.icon}`}>
          <RiDashboardHorizontalFill size={24} className="text-gray-700" />
        </Link>
        {/* History Chat */}
        <div
          className={`p-3 ${neumorphism.icon} cursor-pointer`}
          onClick={openHistoryModal}
          role="button"
          tabIndex={0}
          onKeyPress={(e) =>
            (e.key === "Enter" || e.key === " ") && openHistoryModal()
          }
          aria-haspopup="dialog"
        >
          <VscHistory size={24} className="text-gray-700" />
        </div>
        {/* Profile */}
        <div
          className={`p-3 ${neumorphism.icon} cursor-pointer`}
          onClick={openProfileModal}
          role="button"
          tabIndex={0}
          onKeyPress={(e) =>
            (e.key === "Enter" || e.key === " ") && openProfileModal()
          }
          aria-haspopup="dialog"
        >
          <CgProfile size={24} className="text-gray-700" />
        </div>
      </div>

      {/* History Modal */}
      {isHistoryModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeHistoryModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="historyModalTitle"
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2
                  id="historyModalTitle"
                  className="text-xl md:text-2xl font-bold"
                >
                  Chat History
                </h2>
                <VscHistory size={28} className="text-gray-700" />
              </div>

              <div className="mt-2 w-full max-h-96 overflow-y-auto">
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="border-b pb-2">
                      <div className="flex flex-col hover:bg-gray-50 p-2 rounded cursor-pointer">
                        <span className="font-medium text-gray-800">
                          Chat Session {item}
                        </span>
                        <span className="text-sm text-gray-500">
                          April {item + 3}, 2025 • 10:3{item} AM
                        </span>
                        <p className="text-gray-600 text-sm mt-1 truncate">
                          This is a preview of chat session {item}...
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="mt-6 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors w-full"
                onClick={closeHistoryModal}
                aria-label="Close chat history modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeProfileModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="userModalTitle"
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <CgProfile size={64} className="text-gray-700" />
              <h2
                id="userModalTitle"
                className="text-xl md:text-2xl font-bold mt-4"
              >
                John Doe
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Manufacturing Development
              </p>
              <div className="mt-6 w-full">
                <h3 className="font-semibold text-base md:text-lg border-b pb-2 mb-4">
                  User Information
                </h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="text-gray-600">john.doe@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Position:</span>
                    <span className="text-gray-600">Senior Developer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      Department:
                    </span>
                    <span className="text-gray-600">
                      Manufacturing Development
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      Employee ID:
                    </span>
                    <span className="text-gray-600">EMP12345</span>
                  </div>
                </div>
              </div>
              <button
                className="mt-8 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors w-full"
                onClick={closeProfileModal}
                aria-label="Close user information modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
