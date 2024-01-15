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
        return <div>Sign-In Failed</div>;
      } else {
        return <div>Sign-In Done</div>;
      }
    } catch (error: any) {
      console.error("Unexpected error:", error.message);
    }
  };
  const getSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={getSession}>Get Session</button>;
    </div>
  );
};

export default GoogleAuth;
