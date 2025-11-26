"use client";
import { createContext, useContext, useState, useEffect } from "react";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";

interface CourseContextType {
  courses: any[];
  setCourses: (courses: any[]) => void;
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: () => Promise<void>;
  fetchCourses: () => Promise<void>;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) return course;
        return c;
      })
    );
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        course,
        setCourse,
        addNewCourse,
        deleteCourse,
        updateCourse,
        fetchCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourses must be used within CourseProvider");
  }
  return context;
}

// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";
// import * as db from "./Database";

// interface CourseContextType {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// }

// const CourseContext = createContext<CourseContextType | undefined>(undefined);

// export function CourseProvider({ children }: { children: ReactNode }) {
//   const [courses, setCourses] = useState<any[]>(db.courses);
//   const [course, setCourse] = useState<any>({
//     _id: "0",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     description: "New Description",
//   });

//   const addNewCourse = () => {
//     const newCourse = {
//       ...course,
//       _id: new Date().getTime().toString(),
//     };
//     setCourses([...courses, newCourse]);
//   };

//   const deleteCourse = (courseId: string) => {
//     setCourses(courses.filter((c) => c._id !== courseId));
//   };

//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <CourseContext.Provider 
//       value={{ 
//         courses, 
//         course, 
//         setCourse, 
//         addNewCourse, 
//         deleteCourse, 
//         updateCourse 
//       }}
//     >
//       {children}
//     </CourseContext.Provider>
//   );
// }

// export function useCourses() {
//   const context = useContext(CourseContext);
//   if (!context) {
//     throw new Error("useCourses must be used within CourseProvider");
//   }
//   return context;
// }