import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1 className="m-5">This is parent folder</h1>
      <Link
        href="/f1/f2"
        className="border bg-blue-400 text-black rounded p-2 m-2 hover:bg-blue-500"
      >
        Go to children 2 folder
      </Link>
    </>
  );
}
