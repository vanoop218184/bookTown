import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
            
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4  space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeHolder="Enter your Mail"
                className=" py-1 w-full px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4  space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeHolder="Enter your Password"
                className=" py-1 w-full px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              ></input><br/>
               {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-between mt-4">
              <button className=" bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                {" "}
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-700 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
