// 1. Define your base URL as a standalone constant
const baseUrl = "https://anvi-mail-backend-fast.onrender.com";

// 2. Export the complete object, built using the constant
export const mailBackendUrl = {
    baseUrl: baseUrl,
    subscribe: `${baseUrl}/anvi/subscribe`,
    contact: `${baseUrl}/anvi/contact`,
    jobApply: `${baseUrl}/anvi/jobapply`
};