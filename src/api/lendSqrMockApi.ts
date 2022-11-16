// Axios
import axios from "axios";

// Axios Configuration
const BASE_URL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/";

// Create Axios Instance
export default axios.create({ baseURL: BASE_URL });
