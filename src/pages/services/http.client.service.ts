import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
 
const axiosInstance = axios.create({
    timeout: 5000,
    timeoutErrorMessage: 'İstek zaman aşımına uğradı',
    baseURL: 'https://services.odata.org/northwind/northwind.svc/Products',
});
 
function OnRequestSuccess(config: InternalAxiosRequestConfig) {
    console.log('request', config);
    return config;
}
 
function OnRequestError(error: AxiosError) {
    console.log('error', error);
    return error;
}
 
function OnReponseSuccess(response: AxiosResponse) {
    console.log('reponse', response);
    return response;
}
 
function OnResponseError(error: AxiosError) {
    console.log('response-error', error);
    return error;
}
 
export function SetupInterceptors() {
    axiosInstance.interceptors.request.use(OnRequestSuccess, OnRequestError);
    axiosInstance.interceptors.response.use(OnReponseSuccess, OnResponseError);
 
    return axiosInstance;
}
 