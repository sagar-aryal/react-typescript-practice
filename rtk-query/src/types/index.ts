export interface User {
  id: number;
  firstname: string;
  lastname: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  country: string;
}
