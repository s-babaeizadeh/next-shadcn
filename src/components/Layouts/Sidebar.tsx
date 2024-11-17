import * as React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link href="/" className="font-semibold text-primary">
        Getting Started
      </Link>
      <Link href="/guidens">Introduction</Link>
      <Link href="/features">Features</Link>
    </nav>
  );
}
