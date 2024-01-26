import Sidebar from "./components/Sidebar/Sidebar";

interface Props { children: JSX.Element | JSX.Element[] }

export default function Layout({children}: Props) {
  return (
    <>
    <Sidebar />
    {children}
    </>
  );
}
