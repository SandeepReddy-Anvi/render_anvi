// 1. Define your base URL as a standalone constant
const baseUrl = "https://anvimailbackend-bmcka4bdeudxg8be.southindia-01.azurewebsites.net"; "http://192.168.1.50:8000"; 
// const baseUrl = "http://127.0.0.1:8000";


// 2. Export the complete object, built using the constant
export const mailBackendUrl = {
    baseUrl: baseUrl,
    subscribe: `${baseUrl}/anvi/subscribe`,
    contact: `${baseUrl}/anvi/contact`,
    jobApply: `${baseUrl}/anvi/jobapply`
};