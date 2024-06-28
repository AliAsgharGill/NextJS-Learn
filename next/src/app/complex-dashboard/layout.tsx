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
        <div className="flex">
          <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex flex-1">{notifications}</div>
        </div>
      </div>
    </>
  );
}
