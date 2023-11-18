import React, { useState, useEffect } from "react";

function AmenityList() {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/readAmenity");
        const result = await response.json();

        // Kiểm tra cấu trúc của result.data
        console.log(result.data);

        // Sử dụng dữ liệu trực tiếp nếu nó là mảng
        setAmenities(result.data);
      } catch (error) {
        console.error("Error fetching amenities:", error);
      }
    };

    fetchData();
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần sau render đầu tiên

  return (
    <div>
      <h2>Amenities List</h2>
      <ul>
        {amenities.map((amenity) => (
          <li key={amenity.id}>
            <strong>{amenity.name}</strong>
            <p>ID: {amenity.id}</p>
            <p>Picture: {amenity.id}</p>
            {/* Hiển thị các thông tin khác về amenity nếu cần */}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AmenityList;
