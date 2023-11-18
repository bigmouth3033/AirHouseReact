import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledImage = styled.img`
  width: 300px;
  height: 200px;
`;
function AmenityList() {
  const [amenities, setAmenities] = useState([]);
  const [properType, setPropertyType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAminities = await fetch(
          "http://127.0.0.1:8000/api/readAmenity"
        );
        const responsePropertytpye = await fetch(
          "http://127.0.0.1:8000/api/readAmenity"
        );
        const resultAmenities = await responseAminities.json();
        const rusultPropertytpye = await responsePropertytpye.json();

        // Kiểm tra cấu trúc của result.data
        console.log(resultAmenities.data);

        // Sử dụng dữ liệu trực tiếp nếu nó là mảng
        setAmenities(resultAmenities.data);
        setPropertyType(rusultPropertytpye.data);
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
            <p>Pic: {amenity.icon_image}</p>
            <p>
              Picture: <StyledImage src={amenity.icon_image} alt="pic..." />
            </p>
            {/* Hiển thị các thông tin khác về amenity nếu cần */}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AmenityList;
