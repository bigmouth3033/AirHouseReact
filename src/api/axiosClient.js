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

// Tạo instance của axios:
// axios.create() được sử dụng để tạo một instance của axios với các cấu hình cụ thể. Trong trường hợp này, baseURL được đặt là http://localhost:8000/api, nghĩa là tất cả các request sẽ có đường dẫn bắt đầu bằng http://localhost:8000/api.

// Interceptor Request:
// .interceptors.request.use(): Thêm một hàm interceptor cho request trước khi nó được gửi đi. Trong trường hợp này, interceptor được sử dụng để thêm Authorization header vào mỗi request bằng cách lấy token từ localStorage và thêm nó vào header.

// Interceptor Response:
// .interceptors.response.use(): Thêm một hàm interceptor cho response. Trong trường hợp này, interceptor được sử dụng để kiểm tra nếu response có status là 401 (Unauthorized), thì xóa token khỏi localStorage. Nếu không có lỗi, response được trả về.

// Xuất axiosClient:
// export default axiosClient;: Xuất axiosClient để có thể sử dụng nó trong toàn bộ ứng dụng.
