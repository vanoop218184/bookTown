import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import  toast  from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =  async(data) => 
  {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post("/user/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("login successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("users", JSON.stringify(res.data.user));
          },1000)
         
        }
        
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("error:" + err.response.data.message);
          
        }
      });
  }
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal dark:bg-slate-600 dark:text-white">
          <div className="modal-box  dark:bg-slate-900 dark:text-white">
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
