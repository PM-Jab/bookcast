"use client";

import SignUpForm from "@/components/auth/SignUpForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();

  const handleLoginState = (state: boolean) => {
    setIsSignIn(state);
    router.push(state ? "/login" : "/sign-up");
  };
  const handleLoginSuccess = (isSuccess: boolean) => {
    if (isSuccess) {
      router.push("/login");
    }
  };

  return (
    <div>
      <h2 className="text-[70px] font-extrabold py-10 mx-auto text-center text-white">
        Welcome to BookCast
      </h2>

      <div className="flex items-center justify-center mt-5">
        <SignUpForm
          isSignIn={handleLoginState}
          isLoginSuccess={handleLoginSuccess}
        />
      </div>
    </div>
  );
}
