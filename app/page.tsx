"use client";
import Navbar from "@/modules/components/Navbar";
import React from "react";
import GithubAuth from "@/modules/auth/Github_auth";
import GoogleAuth from "@/modules/auth/Google_auth";
const page = () => {
  return (
    <div>
      <Navbar />
      <GithubAuth />
      <GoogleAuth />
    </div>
  );
};

export default page;
