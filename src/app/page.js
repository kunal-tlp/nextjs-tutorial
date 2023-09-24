'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }

    return (
        <main>
            <h1>Welcome</h1>
            <Link href='/login'>Go To Login Page</Link>
            <br />
            <br />
            <Link href='/about'>Go To About Page</Link>
            <br />
            <br />
            {/* <Link href='/about/aboutstudent'>Go To About Student Page</Link>
            <br />
            <br />
            <Link href='/about/aboutcollege'>Go To About College Page</Link>
            <br />
            <br />
            <Link href='/login/loginstudent'>Go To Login Student Page</Link>
            <br />
            <br />
            <Link href='/login/loginteacher'>Go To Login Teacher Page</Link>
            <br />
            <br /> */}
            <button onClick={() => navigate("/login")}>Go To Login Page</button>
            <button onClick={() => navigate("/about")}>Go To About Page</button>
        </main>
    )
}
