import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import Header from "../components/Header/Header";
import { account } from "../lib/appwrite";
import { useState, useEffect } from "react";
import { Spin } from "@arco-design/web-react";

type Status = "checking" | "authenticated" | "no-authenticated";

export default function AppRouter() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    (async function () {
      const session = await account.getSession("current");
      if (session.$id) setStatus("authenticated");
      else setStatus("no-authenticated");
    })();
  }, [status]);

  if (status === "no-authenticated")
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
        </Routes>
      </BrowserRouter>
    );

  if (status === "checking")
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin style={{ height: 300, width: 300 }} delay={500} />
      </div>
    );

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<PrivateRoutes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
