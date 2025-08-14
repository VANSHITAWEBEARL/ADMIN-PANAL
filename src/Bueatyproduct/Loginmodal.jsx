import React, { useState } from "react";

const Loginmodal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative w-full">
      {/* Trigger Link */}
      <div className="flex items-center w-full">
        <div className="flex items-center space-x-2">
          <button
            onClick={openModal}
            className="text-[#7A7A7A] hover:text-[#f75c6c] focus:outline-none"
            title="Login"
          >
            Login
          </button>
  
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 w-full flex items-center justify-center  bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Username or email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#f75c6c]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#f75c6c]"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-gray-500 hover:text-[#f75c6c]">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f75c6c] text-white font-bold py-2 rounded"
              >
                LOGIN
              </button>
            </form>

            <div className="my-4 flex items-center justify-center">
              <hr className="w-full border-t" />
              <span className="px-2 text-sm text-gray-500">Or continue with</span>
              <hr className="w-full border-t" />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center bg-[#3b5998] text-white py-2 rounded">
                <i className="fab fa-facebook mr-2"></i> FACEBOOK
              </button>
              <button className="flex-1 flex items-center justify-center bg-[#db4437] text-white py-2 rounded">
                <i className="fab fa-google mr-2"></i> GOOGLE
              </button>
            </div>

            <div className="text-center mt-4 text-sm">
              Not a member?{" "}
              <a href="#" className="!text-[#f75c6c]  hover:underline">
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginmodal;
