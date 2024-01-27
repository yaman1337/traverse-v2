import Sidebar from "./components/Sidebar/Sidebar";

interface Props { element: JSX.Element | JSX.Element[] }

export default function DashboardLayout({element}: Props) {
  return (
    <>
    <div className="flex flex-row gap-4 justify-start items-start">
    <Sidebar />
    <div className="main w-full p-4 pt-6">
        {element}
    </div>
    </div>
    </>
  );
}
