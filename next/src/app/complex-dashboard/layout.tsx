export default function DashboardLayout({
  children,
  revenue,
  users,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div>{children}</div>
        <div className="flex h-screen">
          <div className="flex flex-col h-1/2 w-1/2 ">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex flex-1 w-full ">{notifications}</div>
        </div>
      </div>
    </>
  );
}
