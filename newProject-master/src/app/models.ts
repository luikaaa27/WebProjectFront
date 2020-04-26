export interface Recipe {
  name: string;
  id: number;
  categoryId: number;
  ingredients: string;
  description: string;
  rating: number;
  image: string;
}
export interface Category {
  id: number;
  name: string;
}
export interface User {
  id: number;
  login: string;
  password: string;
  name: string;
  last_name: string;
  email: string;
}
export class LoginResponse {
  token: string;
}

export class SignUpResponse {
  id: number;
  username: string;
  password: string;
}
