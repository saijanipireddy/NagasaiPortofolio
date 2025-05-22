import { NavLink } from "react-router-dom";

function Error() {

  return (
    <>
      <img src="./notfound.png" alt="pagenotfound" />
      <h1 className="text-2xl">Page not found</h1>
      <NavLink to='/' className="bg-inherit text-inherit hover:text-inherit">
        <button className="bg-blue-500 px-4 p-2 mt-4 rounded-md shadow-xl text-white hover:bg-blue-600" type="button">Go Home</button>
      </NavLink>
    </>
  )
}

export default Error;
