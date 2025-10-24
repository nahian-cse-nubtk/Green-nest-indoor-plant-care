import React, { useContext, useState } from 'react';
import AuthContext from '../../Provider/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ForgetPassword = () => {

    const [error, setError]=useState("")
    const {forgetPassword}=useContext(AuthContext);
    const navigate = useNavigate();
    //console.log(forgetPassword);
    const handleForgetPass=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        //console.log(email);
        forgetPassword(email)
        .then(()=>{
            //console.log("password reset email sent")

            toast("Email sent and check your email inbox or spam");
            window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
            navigate('/');
        })
        .catch(error=>{
            setError(error.message);

        })
        e.target.reset();
    }
    return (
                <div className="min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center my-3">
      <h1 className="text-4xl font-bold">Enter Your Email</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="p-5">
       <form onSubmit={handleForgetPass}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          {
            error&&<p>{error}</p>
          }

          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
       </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default ForgetPassword;