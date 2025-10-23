import { useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";

const UserDropdown = ({ user, handleLogout }) => {

  const [open, setOpen] = useState(false);
  const userData = user.providerData[0]
  console.log(userData);


  //if (!user) return null; // if no user logged in, don't show dropdown

  return (
    <div className="relative inline-block text-left ml-10">
      {/* Avatar + Name */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm hover:shadow-md transition"
      >
        <img
          src={user.photoURL}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover border"
        />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {user.displayName}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <div className="px-4 py-2 text-sm text-gray-700 border-b">
            <p className="font-semibold">{userData.displayName}</p>
            <p className="text-xs text-gray-500">{userData.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-b-xl"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
