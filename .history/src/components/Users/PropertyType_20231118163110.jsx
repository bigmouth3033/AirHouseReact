import React, { useEffect, useState } from "react";

const PropertyType = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/readAmenity");
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
      {data ? (
        <ul>
          <p>{data[0]}</p>
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default PropertyType;