import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Provider/AuthContext/AuthContext';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {

  const {signIn,signInWithGoogle}=useContext(AuthContext)
  const navigate =useNavigate();
  const [error, setError]=useState("")
  const [show, setShow]=useState(true)
  const location = useLocation();
  //console.log(location);
  //console.log(signInWithGoogle);
  const handleLogin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password =e.target.password.value;
    signIn(email,password)
    .then(()=>{
      //console.log(result)
      navigate(location.state||'/');
      toast("Login Successfull");
    })
    .catch(error=>{
      setError(error.message);
    })
    e.target.reset();


  }
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
      <h1 className="text-4xl font-bold">Login now!</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="p-5">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='password' type={show?"password":"text"} className="input" placeholder="Password" />
          <div className='relative'>

              <p onClick={()=>setShow(!show)} className='absolute left-65 md:left-72 -top-9 '>{show?<FaRegEye size={20}/>:<FaRegEyeSlash size={20}/>}</p>

          </div>
           {
            error&&<p className='text-red-300'>Invalid email and password</p>
           }
          <div><Link to="/forgetpass" className="link link-hover">Forgot password?</Link></div>
          <button className="btn btn-neutral mt-4">Login</button>
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
       <div>
        <p className='mt-5'>Don't have an account? <Link className='text-green-600' to="/register">SignUp</Link></p>
       </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;