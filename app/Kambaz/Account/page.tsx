"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Account() {
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    if (currentUser) {
      router.push("/Kambaz/Account/Profile");
    } else {
      router.push("/Kambaz/Account/Signin");
    }
  }, [currentUser]);

  return null;
}