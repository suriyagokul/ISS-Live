import React, { useState, useEffect } from "react";
import axios from "axios";

const GetAstros = () => {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    const fetchAstros = async () => {
      let res = await axios.get("http://api.open-notify.org/astros.json");
      setAstronauts(res.data);
    };

    fetchAstros();
  }, []);

  const handleAstronaut = (name) => {};

  console.log(astronauts);

  return (
    <div className="">
      <h1 className="text-[#FF00FF] m-5 p-5 font-bold cursor-pointer">
        People On Board Currently in Space {astronauts?.number}
      </h1>
      {astronauts &&
        astronauts?.people?.map((person, personId) => {
          return (
            <a
              href={`https://en.wikipedia.org/wiki/${person.name
                .split(" ")
                .join("_")}_(astronaut)`}
            >
              <div
                key={personId}
                className="flex items-center justify-around gap-4 m-5 p-5 border-2 cursor-pointer hover:scale-105 transition duration-150 ease-in border-white rounded-md"
                onClick={() => handleAstronaut(person.name)}
              >
                <p className="text-[#FFD700] w-[60%]">{person.name}</p>
                <p
                  className="text-violet-600 w-[20%] md:w-[10%]"
                  style={{ alignSelf: "center" }}
                >
                  {person.craft}
                </p>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default GetAstros;
