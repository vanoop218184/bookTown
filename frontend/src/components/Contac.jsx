import React from "react";
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const usermessage = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("https://booktown-7t2h.onrender.com/message/contact", usermessage)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("message submitted successfully");
        }
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
      <div className="flex h-screen items-center justify-center">
        <div
          id=" my_modal_3"
          className=" w-[600px]  flex items-center justify-center"
        >
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <Link to="/">X</Link>
              </button>

              <h1 className="font-semibold text-3xl ">Contact Us</h1>
              <div className="mt-4  space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeHolder="Enter your FullName"
                  className=" py-1 w-full px-3 border rounded-md outline-none"
                  {...register("name", { required: true })}
                ></input>
                <br />
                {errors.name && (
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
              <div className="mt-3  space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="message"
                  placeHolder="Type Your Message"
                  className="p-[10px] w-full h-20 block text-sm "
                  {...register("message", { required: true })}
                ></textarea>
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <button className="mt-4 btn btn-active btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contac;
