"use client";
import { supabase } from "@/utils/supabase/server";
import React from "react";

const GoogleAuth = async () => {
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        console.error("Error signing in with Google:", error.message);
      } else {
        console.log("Successfully initiated Google OAuth sign-in:", data);
      }
    } catch (error: any) {
      console.error("Unexpected error:", error.message);
    }
  };

  return <button onClick={signInWithGoogle}>Sign In with Google</button>;
};

export default GoogleAuth;
