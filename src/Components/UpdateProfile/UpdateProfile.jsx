import React from 'react';

const UpdateProfile = () => {
    return (
        <div className="min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center my-3">
      <h1 className="text-4xl font-bold">Update now!</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="p-5">
       <form>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input required type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input required type="text" name='photoURL' className="input" placeholder="PhotoURL" />
          <label className="label">Email</label>
          <input required name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />


          <button className="btn btn-neutral mt-4">Update</button>
        </fieldset>
       </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default UpdateProfile;