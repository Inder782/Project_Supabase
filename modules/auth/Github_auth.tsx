"use client";
import { supabase } from "@/utils/supabase/server";
import React from "react";

const GithubAuth = async () => {
  const signInWithGithub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });

      if (error) {
        console.error("Error signing in with Github:", error.message);
      } else {
        console.log("Successfully initiated Github", data);
      }
    } catch (error: any) {
      console.error("Unexpected error:", error.message);
    }
  };

  return <button onClick={signInWithGithub}>Sign In with Github</button>;
};

export default GithubAuth;
