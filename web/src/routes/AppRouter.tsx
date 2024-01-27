import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import Header from "../components/Header/Header";
import { account } from "../lib/appwrite";
import { useState, useEffect } from "react";

type Status = "checking" | "authenticated" | "no-authenticated";

export default function AppRouter() {
  const [status, setStatus] = useState<Status>("no-authenticated");

  useEffect(() => {
    (async function () {
      const session = await account.getSession("current");
      if (session.$id) setStatus("authenticated");
      else setStatus("no-authenticated");
    })();
  }, [status]);

  if (status === "no-authenticated") return

  console.log("randi", status)
  if (status === "checking") return <div className="loading">Checking credentials...</div>;

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {status === "authenticated" ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <Route path="/*" element={<PublicRoutes />} />
          )}

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
