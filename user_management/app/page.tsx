"use client";
import { supabase } from "@/utils/supabase/server";
import React, { useState } from "react";

const page = async () => {
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  supabase.auth.signInWithOtp({
    email: "",
    options: {
      shouldCreateUser: false,
      emailRedirectTo: "https://example.com/welcome",
    },
  });
  return <div>hello</div>;
};

export default page;
