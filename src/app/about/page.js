'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';

const About = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name);
    }
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">Go To Home Page</Link>
            <br />
            <br />
            <Link href="/about/aboutstudent">Go To About Student Page</Link>
            <button onClick={() => navigate("/about/aboutstudent")}>Go To About Student Page</button>
            <button onClick={() => navigate("/about/aboutcollege")}>Go To About College Page</button>
        </div>
    );
}

export default About;
