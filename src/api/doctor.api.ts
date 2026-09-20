import apiClient from "@/lib/clientApi";
import type { ApiResponse } from "@/types/api.type";
import type { DoctorApplicationPayload, DoctorParams, IDoctorData } from "@/types/doctor.type";

export function applyAsDoctor(payload: DoctorApplicationPayload) {
  const formData = new FormData();

  formData.append("data", JSON.stringify(payload.data));
  formData.append("resume", payload.resume);

  for (const file of payload.additionalFiles) {
    formData.append("additionalFiles", file);
  }

  return apiClient("/doctor/apply-doctor", {
    method: "POST",
    body: formData,
  });
}


export function getAllDoctors(params: DoctorParams) {
  return apiClient<ApiResponse<IDoctorData[]>>("doctor/all-doctors", {params})
}
