import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/kunal">Kunal</Link>
                </li>
                <li>
                    <Link href="/studentlist/praveen">Praveen</Link>
                </li>
                <li>
                    <Link href="/studentlist/rohit">Rohit</Link>
                </li>
                <li>
                    <Link href="/studentlist/gautam">Gautam</Link>
                </li>
            </ul>
        </div>
    );
}
