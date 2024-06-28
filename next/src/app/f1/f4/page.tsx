import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1 className="m-5">This is F4 Page</h1>
      <Link
        href="/f1/f3"
        className="border bg-blue-400 text-black rounded p-2 m-2 hover:bg-blue-500"
      >
        Go to F3
      </Link>
      <Link
        href="/about"
        className="border bg-blue-400 text-black rounded p-2 m-2 hover:bg-blue-500"
      >
        Go to About
      </Link>
    </>
  );
}
