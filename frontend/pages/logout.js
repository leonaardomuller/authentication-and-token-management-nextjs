import React from "react";
import { tokenService } from "../src/services/auth/tokenService";
import { useRouter } from "next/router";
import { HttpClient } from "../src/infra/HttpClient/HttpClient";
export default function LogoutPage() {
  const router = useRouter();
  React.useEffect(async () => {
    try {
      await HttpClient("/api/refresh", {
        method: "DELETE",
      });
      tokenService.delete();
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  }, []);
  return <div>Você será redirecionado em instante...</div>;
}
