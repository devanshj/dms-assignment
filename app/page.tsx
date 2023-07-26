import Link from "next/link";

export default function RootPage() {
  return <div className="flex gap-[15px] p-[15px]">
    <Link href="/login" className="underline">Login</Link>
    <Link href="/dashboard" className="underline">Dashboard</Link>
  </div>
}
