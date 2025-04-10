"use server";
import { cookies } from "next/headers";

export const login = async (username: string, password: string) => {
  const res = await fetch("http://127.0.0.1:8080/v1/users/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const token = await res.json();
  console.log("Token:", token.usertoken);

  if (!res.ok || token === null) {
    console.log("Failed to login");
  }

  if (token) {
    (await cookies()).set("user_token", token.usertoken, {
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === "development", // Use HTTPS in production
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/", // Available throughout the site
    });
  } else {
    console.log("Token is null, cannot set cookie");
  }
};

export const register = async (username: string, password: string) => {
  const res = await fetch(
    "http://127.0.0.1:8080/v1/users/api/v1/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  );

  if (!res.ok) {
    console.log("Failed to register");
  }

  return res.json();
};

export const getUserData = async (userToken: string) => {
  const res = await fetch("http://127.0.0.1:8080/v1/users/api/v1/users/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  });

  if (!res.ok) {
    console.log("Failed to get user data");
  }
  return res.json();
};

export const getCookie = async () => {
  const token = (await cookies()).get("user_token")?.value;
  console.log("Token:", token);
  return token;
};
