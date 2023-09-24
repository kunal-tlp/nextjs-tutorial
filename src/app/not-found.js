'use client'
import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>This Page is not Available</h1>
            <Link href="/login">Go To Login Main Page</Link>
        </div>
    );
}
