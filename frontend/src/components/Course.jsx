import React from "react";

import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const dat = res.data.filter((data) => data.category === "Paid");
        setBook(dat);
        console.log(dat);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="m-w-screen-2xl  container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-20 items-center dark:bg-slate-900 dark:text-white justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            {" "}
            We're delighted to have you
            <span className="text-pink-500"> Here!</span>{" "}
          </h1>
          <p className="mt-10 text-left">
            "Writing and reading decrease our sense of isolation. They deepen
            and widen and expand our sense of life: They feed the soul. When
            writers make us shake our heads with the exactness of their prose
            and their truths, and even make us laugh about ourselves or life,
            our buoyancy is restored. We are given a shot at dancing with, or at
            least clapping along with, the absurdity of life, instead of being
            squashed by it over and over again. It's like singing on a boat
            during a terrible storm at sea. You can't stop the raging storm, but
            singing can change the hearts and spirits of the people who are
            together on that ship."
           
            <span className="font-semibold text-right">
              – Anne Lamott, Bird by Bird
            </span>
          </p>
          <Link to="/">
            {" "}
            <button className="btn mt-6 btn-secondary">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
