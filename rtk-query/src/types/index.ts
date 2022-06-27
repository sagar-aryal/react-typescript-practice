export interface User {
  id: string;
  firstname: string;
  lastname: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  country: string;
}
