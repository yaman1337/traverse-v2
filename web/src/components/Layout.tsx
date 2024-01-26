interface Props { children: JSX.Element | JSX.Element[] }

export default function Layout({children}: Props) {
  return (
    <>
    <h1>Protected Routes with React Router</h1>
    {children}
    </>
  );
}