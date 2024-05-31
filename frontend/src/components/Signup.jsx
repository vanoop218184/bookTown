import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup successfully");
          Navigate(from, { replace: true });
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("error:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center  dark:bg-slate-600 dark:text-white">
        <div id=" my_modal_3" className=" w-[600px]">
          <div className="modal-box  dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <Link to="/">X</Link>
              </button>

              <h3 className="font-bold text-lg">Sign Up</h3>
              <div className="mt-4  space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeHolder="Enter your FullName"
                  className=" py-1 w-full px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                ></input>
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4  space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeHolder="Enter your Email"
                  className=" py-1 w-full px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                ></input>
                <br />
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
                ></input>
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button className=" bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Sign Up
                </button>
                <p>
                  {" "}
                  Have account?{" "}
                  <button
                    className="underline text-blue-700 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login></Login>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
