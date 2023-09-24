'use client'

export default function StudentList({params}) {
    console.log(params)
    return (
        <div>
            <h1>Student Detail</h1>
            <h2>Name: {params.student}</h2>
        </div>
    );
}
