// Import thư viện axios
import axios from "axios";

// Tạo một instance của axios với cấu hình cụ thể
const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`, // Đặt baseURL cho tất cả các request
});

// Interceptor để thêm Authorization header vào mỗi request trước khi nó được gửi đi
axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("ACCESS_TOKEN"); // Lấy token từ localStorage
  config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header của request
  return config; // Trả về cấu hình đã được thay đổi
});

// Interceptor xử lý response
axiosClient.interceptors.response.use(
  // Xử lý response thành công
  (response) => {
    return response; // Trả về response nếu không có lỗi
  },
  // Xử lý response khi có lỗi
  (error) => {
    const { response } = error; // Lấy response từ error

    // Kiểm tra nếu response status là 401 (Unauthorized)
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN"); // Xóa token từ localStorage nếu không hợp lệ
    }

    throw error; // Ném error để được xử lý bởi các lớp xử lý lỗi khác (nếu có)
  }
);

// Xuất axiosClient để có thể sử dụng trong toàn bộ ứng dụng
export default axiosClient;
