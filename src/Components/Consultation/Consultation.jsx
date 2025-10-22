import React from 'react';

const Consultation = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        console.log(name,email);
        e.target.reset();
    }
    return (
        <div className="hero bg-base-200 ">

  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div> */}
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} >
            <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          <button className="btn btn-neutral mt-4">Book Now</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>

    );
};

export default Consultation;