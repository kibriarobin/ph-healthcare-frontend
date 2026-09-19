export interface RegistrationPayload {
  name: string;
  email: string;
  password: string;
  patient: {
    contactNumber?: string;
  };
}

export interface VerifyAccountPayload {
  email: string;
  otp: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN" | "DOCTOR" | "PATIENT";
  status: "ACTIVE" | "BLOCKED" | "DELETED";
  emailVerified: boolean;
  authProvider: "GOOGLE" | "CREDENTIAL";
  profilePhoto?: string | null;
  patient?: {
    id: string;
    name: string;
    email: string;
    contactNumber?: string | null;
  } | null;
  doctor?: {
    id: string;
    name: string;
    email: string;
    specialization: string;
    verificationStatus: "PENDING" | "APPROVED" | "REJECTED";
  } | null;
}

export interface UserProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserProfile;
}