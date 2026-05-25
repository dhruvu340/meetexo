"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/config/firebaseConfig";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { doc, getDoc } from "firebase/firestore";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingType from "./meeting-type/page";

const DashBoard = () => {
  const [loading, setLoading] = useState(true);

  const { user, isLoading } = useKindeBrowserClient();

  const router = useRouter();

  const isBusinessRegistered = async () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    try {
      const docRef = doc(db, "Business", user.email);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Business exists:", docSnap.data());
      } else {
        router.replace("/create-business");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      isBusinessRegistered();
    }
  }, [user, isLoading]);

  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin h-10 w-10" />
      </div>
    );
  }

  return (
    <div>
      DashBoard

      <MeetingType/>
    </div>
  );
};

export default DashBoard;