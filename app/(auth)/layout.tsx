import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Login in with google",
  description: "log in to have access",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
}
