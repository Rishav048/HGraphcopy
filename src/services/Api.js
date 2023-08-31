// let BASE_PROXY_URL = "http://35.173.227.195:82"; // development URL
let BASE_PROXY_URL = "https://api.holografs.com"; // development URL


export const IMAGE_PROXY_URL = "https://api.holografs.com";
export const POST_REGISTER = `${BASE_PROXY_URL}/account/register`;
export const POST_OTP = `${BASE_PROXY_URL}/account/sendotp`;
export const POST_LOGIN = `${BASE_PROXY_URL}/account/login`;
export const PATCH_UPDATE_USER = `${BASE_PROXY_URL}/account/updateuser`;
export const ADD_PRODUCT = `${BASE_PROXY_URL}/product/addproduct`;
export const GET_PRODUCT = `${BASE_PROXY_URL}/product/getproduct`;
export const GET_CATEGORY = `${BASE_PROXY_URL}/product/getcategory`;
export const GET_COLOR = `${BASE_PROXY_URL}/product/getcolor`;
export const ADD_PRODUCT_DETAILS = `${BASE_PROXY_URL}/product/addproductdetail`;
export const GET_PRODUCT_DETAILS = `${BASE_PROXY_URL}/product/getproductdetail`;
export const GET_QR = `${BASE_PROXY_URL}/product/getqrcode`;
export const UPLOAD_QR = `${BASE_PROXY_URL}/product/uploadqrcode`;
export const GET_OWNER = `${BASE_PROXY_URL}/product/getowner`;
export const REQUEST_OWNERSHIP = `${BASE_PROXY_URL}/product/requistowner`;
export const GET_USER_DETAILS = `${BASE_PROXY_URL}/account/getuser`;
export const GET_ACTIVE_USER = `${BASE_PROXY_URL}/account/getuser`;
export const GET_ALL_REQUEST = `${BASE_PROXY_URL}/product/getallownerrequest`;
export const APPROVE_OWNERSHIP = `${BASE_PROXY_URL}/product/approveowner`;
export const GET_OWNERSHIP_STATUS = `${BASE_PROXY_URL}/product/getownerrequeststatus`;
export const GET_ALL_SENT_REQUEST = `${BASE_PROXY_URL}/product/getallsendownerrequest`;
