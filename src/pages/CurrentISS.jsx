import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrentISS() {
  const [currentCoordinates, setCurrentCoordinates] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          "http://api.open-notify.org/iss-now.json"
        );
        setCurrentCoordinates(response.data.iss_position);
      } catch (error) {
        console.log("Error fetching ISS coordinates:", error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <div
      key="current-iss"
      className="flex items-center justify-around  m-5 p-5 border-2 cursor-pointer hover:scale-105 transition duration-150 ease-in border-white rounded-md"
      onClick={async () => {
        navigator.clipboard.writeText(
          `${currentCoordinates.latitude} ${currentCoordinates.longitude}`
        );
        const clipboardText = await navigator.clipboard.readText();
        alert(`Copied ${clipboardText}`);
      }}
    >
      <p className="text-[#FFD700] w-[60%]">{`ISS at Latitude: ${currentCoordinates.latitude}`}</p>
      <p className="text-violet-600  self-center">{`ISS at Longitude: ${currentCoordinates.longitude}`}</p>
    </div>
  );
}

export default CurrentISS;
