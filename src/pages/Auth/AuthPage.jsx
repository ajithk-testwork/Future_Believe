import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [searchParams] = useSearchParams();
  const usertype = searchParams.get("usertype");


  // console.log(usertype,'USER TYPE')

  return (
    <div className="h-screen container1  w-full flex items-center justify-center ">
      <div className="bg-purple-100 m-2 z-50 backdrop-blur-xl p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-thin text-black text-center mb-6">
          {isLogin ? "Login" : "Register"} as a <span className="uppercase text-purple-700 font-bold">{usertype}</span>
        </h2>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <p className="text-center mt-4 text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-purple-500 font-bold ml-1 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
        <div className="flex items-center uppercase justify-center ">
          <h3>download our app in </h3>
      <img className='h-10 hover:cursor-pointer' src="/PlayStore Png.png" alt="Playstore Logo png" />
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <form className="space-y-4">
      <input type="email" placeholder="Email" className="w-full p-3 accent-purple-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <div className=" left-0 flex ">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          className="mr-2 accent-purple-700"
          />
        <label htmlFor="showPassword" className="text-sm text-purple-700">
          Show Password
        </label>
      </div>
      <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-600 transition">
        Login
      </button>
    </form>
  );
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <div className=" left-0 flex ">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          className="mr-2 accent-purple-700"
        />
        <label htmlFor="showPassword" className="text-sm text-purple-700">
          Show Password
        </label>
      </div>
      <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-600 transition">
        Register
      </button>
    </form>
  );
};

export default AuthPage;