function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      
      <form className="bg-blue-900 p-5 w-72 rounded">
        <h1 className="text-xl text-center mb-4 text-white">
          Register
        </h1>

        <label className="text-white">First Name</label>
        <input type="text" className="border w-full mb-3 p-1" />

        <label className="text-white">Last Name</label>
        <input type="text" className="border w-full mb-3 p-1" />

        <label className="text-white">Email</label>
        <input type="email" className="border w-full mb-3 p-1" />

        <label className="text-white">Password</label>
        <input type="password" className="border w-full mb-4 p-1" />

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Submit
        </button>
      </form>

    </div>
  );
}

export default Register;
