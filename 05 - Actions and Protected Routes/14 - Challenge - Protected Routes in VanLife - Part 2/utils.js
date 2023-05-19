import { redirect } from "react-router-dom";
export function requiredAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect("/login");
  }
}
