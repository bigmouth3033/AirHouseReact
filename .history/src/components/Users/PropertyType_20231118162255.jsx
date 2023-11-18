import React, { useEffect, useState } from "react";

const PropertyType = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <p></p>
      <img src="" alt="" />
    </div>
  );
};

export default PropertyType;
