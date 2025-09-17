export default function CoursePage({ params }: { params: { courseId: string } }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Course: {params.courseId}</h1>
      <p>This is the course home page.</p>
    </div>
  );
}

// import { redirect } from "next/navigation"; 
 
// export default async function CoursesPage({ params, }: { params: Promise<{ cid: string }>; }) { 
//  const { cid } = await params; 
//  redirect(`/Courses/${cid}/Home`); 
// } 