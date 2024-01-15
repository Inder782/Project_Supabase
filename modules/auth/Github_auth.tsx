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
        return <div>Sign-In Failed</div>;
      } else {
        return <div>Sign-In successfull</div>;
      }
    } catch (error: any) {
      console.error("Unexpected error:", error.message);
    }
  };

  return <button onClick={signInWithGithub}>Sign In with Github</button>;
};

export default GithubAuth;
