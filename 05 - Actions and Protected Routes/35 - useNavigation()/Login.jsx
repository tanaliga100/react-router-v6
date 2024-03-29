import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeLoginUser(creds) {
  if (creds.email === "b@b.com" && creds.password === "p123") {
    await sleep(1000);
    localStorage.setItem("loggedin", true);
    return {
      email: creds.email,
      token: "1234567890abcdef",
    };
  }
  throw new Error("Couldn't log the user in");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const user = await fakeLoginUser({ email, password });
    return redirect("/protected");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const errorMessage = useActionData();
  const data = useNavigation();

  console.log({ data });
  return (
    <Form method="post" replace>
      <h2>Login</h2>
      {errorMessage && <h4 className="red">{errorMessage}</h4>}
      <input type="email" name="email" placeholder="Email address" />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <button disabled={data.state === "submitting"}>
        {data.state === "submitting" ? "Logging In" : "Log In"}
      </button>
    </Form>
  );
}
