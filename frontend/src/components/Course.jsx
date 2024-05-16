import React from "react";
import list from "../../public/list.json";
import Card from "./Card";
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
      <div className="m-w-screen-2xl  container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-20 items-center dark:bg-slate-900 dark:text-white justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            {" "}
            We're delighted to have you
            <span className="text-pink-500"> Here!</span>{" "}
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            {" "}
            <button className="btn mt-6 btn-secondary">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
