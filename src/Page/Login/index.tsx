
import { FcGoogle } from "react-icons/fc"; // Import Google icon from React Icons
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import useGoogleAuthToken from "../../hooks/useGoogleAuthToken";
import useGoogleAuthLink from "../../hooks/useGoogleAuthLink";
// import useProfile from "../../hooks/useProfile";




const Login: React.FC = () => {
  // const { data: profile, refetch: fetchProfile } = useProfile();
  const { data: googleAuth, refetch: fetchGoogleAuth } = useGoogleAuthLink();
  const { mutate, isSuccess } = useGoogleAuthToken();

  useEffect(() => {
    if (googleAuth) {
      window.location.replace(googleAuth.authorizationUrl);
    }
  }, [googleAuth]);

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);

    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
      mutate({ code, state });
    }
  }, [mutate]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     fetchProfile();
  //   }
  // }, [isSuccess, fetchProfile]);

  useEffect(() => {
    if (googleAuth) {
      window.location.replace(googleAuth.authorizationUrl);
    }
  }, [googleAuth]);

  const handleGoogleLogin = () => {
    fetchGoogleAuth();
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Đăng nhập Spicy để tiếp tục
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <div className="flex flex-col gap-3 items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Đăng nhập
            </button>
            <span>Hoặc</span>
            <Link to="">Bạn chưa có tài khoản?</Link>
            <button
              className="bg-white hover:bg-slate-300 border border-spacing-5 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center gap-2"
              type="button"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
