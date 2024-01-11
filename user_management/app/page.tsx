import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Accountform from "./account/account-form";
import AuthForm from "./authform";
import { cookies } from "next/headers";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="row gap-4">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p>
          Experience our Auth and Storage through a simple profile management
          example. Create a user profile and upload an avatar image. Fast,
          simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget gap-4">
        <Accountform user={user} />
      </div>
    </div>
  );
}
