import Card from "@/components/card.tsx/page";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <>
      <Card>
        <div> Archived Notifications</div>
        <Link href="/complex-dashboard/" className="text-blue-400">
          Default
        </Link>
      </Card>
    </>
  );
}
