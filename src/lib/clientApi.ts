import { ofetch } from "ofetch";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

const apiClient = ofetch.create({
  baseURL: baseUrl,
  credentials: "include",
  onResponseError({ response }) {
    const message =
      response._data?.message || "Something went wrong. Please try again.";
    throw new Error(message);
  },
});

export default apiClient;