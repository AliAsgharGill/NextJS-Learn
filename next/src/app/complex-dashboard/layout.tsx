export default function DashboardLayout({
  children,
  revenue,
  users,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div>
        <div>{children}</div>
        <div className="flex h-screen">
          <div className="flex flex-col h-1/2 w-1/2 ">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex flex-1 w-full h1/2 ">{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    <div className="text-3xl font-bold text-white">{login}</div>
  );
}
