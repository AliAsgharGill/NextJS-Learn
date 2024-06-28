import Card from "@/components/card.tsx/page";
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <Card>
        <div>Notifications</div>
        <Link href="/complex-dashboard/archived" className="text-blue-400">
          Archived
        </Link>
      </Card>
    </>
  );
}
