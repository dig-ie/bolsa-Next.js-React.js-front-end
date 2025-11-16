"use client";
import { LoginCard } from "@/components/NewDesignSystem/organisms/LoginCard";
import { AuthPageTemplate } from "@/components/NewDesignSystem/templates/AuthPageTemplate";

export default function Login() {
  return (
    // <div className="lg:bg-white w-screen h-screen">
    //   Login
    //   <LoginCard />
    // </div>
    <AuthPageTemplate title="Login">
      <LoginCard className="h-full w-full" />
    </AuthPageTemplate>
  );
}
