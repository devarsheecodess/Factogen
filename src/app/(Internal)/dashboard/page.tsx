"use client";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/atoms";
import { useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Email: {user.email}</p>
    </>
  );
}
