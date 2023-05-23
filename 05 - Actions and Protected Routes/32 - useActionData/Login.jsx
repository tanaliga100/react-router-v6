import React from "react";
import { Form, useActionData } from "react-router-dom";

async function fakeLoginUser(creds) {
  console.log({ creds });
  if (creds.email === "b@b.com" && creds.password === "p123") {
    return "User is logged in!";
  }
  throw new Error("Couldn't log the user in");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log({ email, password });
  return "couldnt log in";
}

export default function Login() {
  const res = useActionData();
  console.log({ res });

  return (
    <Form method="post" replace>
      <h2>Login</h2>
      {res && <h4 className="red">{res}</h4>}
      <input type="email" name="email" placeholder="Email address" />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <button>Log in</button>
    </Form>
  );
}
