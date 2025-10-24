import React, { useContext, useState } from "react";
import AuthContext from "../../Provider/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser,signInWithGoogle,setLoadingNav } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow]=useState(true);
  const [error, setError] = useState("");
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const lengthRegex = /^.{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    //console.log(name,photoURL);
    if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercaseRegex.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    } else if (!lengthRegex.test(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    } else {
      setError("");
    }
    createUser(email, password)
      .then(() => {
        //console.log(result.user)
        setLoadingNav(true);


      updateUser(name, photoURL)
      .then(() => {
        //console.log("result update");
        setLoadingNav(true);
      })
      .catch((error) => {
        setError(error.message);
      });

        navigate("/");
        toast("Registration Successfull and Please Login Now!");

      })
      .catch((error) => {
        setError(error.message);

      });


  };
  const handleGooglesignIn=()=>{
      signInWithGoogle()
      .then(()=>{
        //console.log(result)
        navigate(location.state||"/")
        toast("Login Successfull");

      })
      .catch(error=>{
        setError(error.message);
      })

    }


  return (
    <div className="min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center my-3">
          <h1 className="text-4xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="p-5">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo URL</label>
                <input
                  required
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="PhotoURL"
                />
                <label className="label">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password" required
                  type={show ? "password" : "text"}
                  className="input"
                  placeholder="Password"
                />
                <div className="relative">
                  <p
                    onClick={() => setShow(!show)}
                    className="absolute left-65 md:left-72 -top-9 "
                  >
                    {show ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20}/>}
                  </p>
                </div>
                {error ? <p className="text-red-300">{error}</p> : ""}

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <div className='fieldset'>
         <button onClick={handleGooglesignIn} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
       </div>
            <p className="mt-5">Already have an accout? please <Link className="text-green-600 underline" to="/login">LogIn</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
