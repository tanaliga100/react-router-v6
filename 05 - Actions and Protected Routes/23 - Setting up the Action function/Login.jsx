import React from "react";
import { Form } from "react-router-dom";

export async function loginAction(obj) {
  console.log(obj);
  console.log("IM THE ACTION FUNCTION");
  return null;
}

export default function Login() {
  return (
    <Form method="post">
      <input type="email" name="email" placeholder="Email address" />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <button>Log in</button>
    </Form>
  );
}
