import { useAuth } from "../stores/authStore";
import { useNavigate } from "react-router";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e8e8ed] rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center text-lg sm:text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-xs sm:text-sm text-[#6e6e73]">
              Welcome back
            </p>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1d1d1f]">
              {currentUser?.firstName}
            </h2>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="w-full sm:w-auto bg-[#ff3b30] text-white text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-[#d62c23] transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default UserProfile;
