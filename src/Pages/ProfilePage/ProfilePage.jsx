import { Link } from "react-router";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-green-50 to-green-100 p-6">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md text-center border border-green-100">

        {/* Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt="User Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-green-300 object-cover shadow-md"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold mt-5 text-green-700">
          Shaikh Al Nahian
        </h2>

        {/* Email */}
        <p className="text-gray-500 text-sm mt-1">nahian@example.com</p>

        {/* Divider */}
        <div className="my-6 border-t border-green-200"></div>

        {/* Profile Info */}
        <div className="text-left space-y-3">
          <p>
            <span className="font-semibold text-green-700">UID:</span>{" "}
            <span className="text-gray-700 text-sm">1234567890</span>
          </p>
          <p>
            <span className="font-semibold text-green-700">Email Verified:</span>{" "}
            <span className="text-green-600 font-medium">Yes ✅</span>
          </p>
        </div>

        {/* Update Button (non-functional) */}
        <div className="mt-6">
          <Link to="/update">
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold shadow-md transition"
          >
            Update Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
