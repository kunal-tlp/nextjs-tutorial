'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Fetch Data with API in Client Component</h1>
            <Link href="/productlist">Go to product List Page</Link>
        </main>
    )
}
