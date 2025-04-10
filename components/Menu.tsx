// components/Menu.tsx
"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import Link from "next/link";
import { VscHistory } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

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

  const handleLogout = () => {
    logout();
    router.push("/");
    closeProfileModal();
  };

  const iconButtonClass =
    "p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-gray-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200";

  return (
    <>
      <div className="fixed flex space-x-4 top-6 right-6">
        {/* Dashboard Link - only show for superadmin */}
        {user && user.role === "superadmin" && (
          <Link
            href="/dashboard"
            className={iconButtonClass}
            aria-label="Go to Dashboard"
          >
            <RiDashboardHorizontalFill size={24} />
          </Link>
        )}

        {/* History Chat - only show for logged in users */}
        {user && (
          <button
            className={`${iconButtonClass} hover:cursor-pointer`}
            onClick={openHistoryModal}
            aria-label="Open Chat History"
          >
            <VscHistory size={24} />
          </button>
        )}

        {/* Profile or Login button */}
        {user ? (
          <button
            className={`${iconButtonClass} hover:cursor-pointer`}
            onClick={openProfileModal}
            aria-label="Open Profile"
          >
            <CgProfile size={24} />
          </button>
        ) : (
          <Link href="/login" className={iconButtonClass} aria-label="Login">
            <BiLogIn size={24} />
          </Link>
        )}
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
            className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2
                  id="historyModalTitle"
                  className="text-xl md:text-2xl font-bold text-gray-900"
                >
                  Chat History
                </h2>
                <VscHistory size={28} className="text-gray-700" />
              </div>

              <div className="mt-2 w-full max-h-96 overflow-y-auto">
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="border-b border-gray-200 pb-2">
                      <div className="flex flex-col hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                        <span className="font-medium text-gray-900">
                          Chat Session {item}
                        </span>
                        <span className="text-sm text-gray-600">
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
                className="mt-6 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors w-full"
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
      {isProfileModalOpen && user && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeProfileModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="userModalTitle"
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <CgProfile size={32} className="text-gray-700" />
              </div>
              <h2
                id="userModalTitle"
                className="text-xl md:text-2xl font-bold text-gray-900 mt-4"
              >
                {user.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {user.division}
              </p>
              <div className="mt-6 w-full">
                <h3 className="font-semibold text-base md:text-lg text-gray-900 border-b border-gray-200 pb-2 mb-4">
                  User Information
                </h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="text-gray-600">{user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Role:</span>
                    <span className="text-gray-600">{user.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Division:</span>
                    <span className="text-gray-600">{user.division}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className="text-gray-600">{user.status}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 w-full space-y-3">
                <button
                  className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors w-full"
                  onClick={closeProfileModal}
                  aria-label="Close user information modal"
                >
                  Close
                </button>
                <button
                  className="bg-red-100 text-red-700 py-2 px-4 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors w-full flex items-center justify-center"
                  onClick={handleLogout}
                  aria-label="Logout"
                >
                  <BiLogOut size={20} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
