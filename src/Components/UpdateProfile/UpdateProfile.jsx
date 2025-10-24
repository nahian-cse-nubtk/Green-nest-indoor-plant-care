import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../../Provider/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Loading from '../Loading/Loading';

const UpdateProfile = () => {
    const nameRef = useRef();
    const photoRef = useRef();
    const navigate = useNavigate();
    const [error,setError]=useState("")
    const {user, updateUser,setLoadingNav}=useContext(AuthContext);
    // if(!user){
    //     return <Loading></Loading>
    // }
    const userData = user



    const handleUpdate =(e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const photoURL = photoRef.current.value;

        updateUser(name,photoURL)
        .then(()=>{
            toast('profile is updated')
            navigate('/profile');
            setLoadingNav(true);
            

        })
        .catch(error=>{
            setError(error.message)

        })

        //console.log(name,photoURL);
    }
    return (
        <div className="min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center my-3">
      <h1 className="text-4xl font-bold">Update now!</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="p-5">
       <form onSubmit={handleUpdate}>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input ref={nameRef} defaultValue={userData.displayName||""} type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input ref={photoRef} defaultValue={userData.photoURL||""} type="text" name='photoURL' className="input" placeholder="PhotoURL" />



          <button className="btn btn-neutral mt-4">Update</button>
        </fieldset>
       </form>
       {
        error&&<p className='text-red-300'>{error}</p>
       }

      </div>
    </div>
  </div>
</div>
    );
};

export default UpdateProfile;