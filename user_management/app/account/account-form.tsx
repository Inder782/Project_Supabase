"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";

export default function Accountform({ user }: { user: User | null }) {
  const supabase = createClientComponentClient();
  const [loading, setloading] = useState(true);
  const [fullname, setfullname] = useState<string | null>(null);
  const [username, setusername] = useState<string | null>(null);
  const [website, setwebsite] = useState<string | null>(null);
  const [avatar_url, setavatarurl] = useState<string | null>(null);
  const [id, setid] = useState<string | null>(null);
  const getprofile = useCallback(async () => {
    try {
      setloading(true);
      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name,username,avatar_url,website,id`)
        .eq("id", user?.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setfullname(data.full_name);
        setusername(data.username);
        setwebsite(data.website);
        setavatarurl(data.avatar_url);
        setid(data.id);
      }
    } catch (error) {
      alert("Error Loading data");
    } finally {
      setloading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getprofile();
  }, [user, getprofile]);

  async function update_profile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setloading(true);
      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        fullname: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile Updated");
    } catch (error) {
      alert("An error occured");
    } finally {
      setloading(false);
    }
  }
  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          type="text"
          value={fullname || ""}
          onChange={(e) => setfullname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          value={website || ""}
          onChange={(e) => setfullname(e.target.value)}
        />
      </div>
      <div>
        <button
          className="button-primary block"
          onClick={() =>
            update_profile({ fullname, username, website, avatar_url })
          }
          disabled={loading}
        >
          {loading ? "Loading...." : "Update"}
        </button>
      </div>
      <div>
        <form action="/auth/signout" method="post">
          <button className="buttton block" type="submit">
            Signout
          </button>
        </form>
      </div>
    </div>
  );
}
