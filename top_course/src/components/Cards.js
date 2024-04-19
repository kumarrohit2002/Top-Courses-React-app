import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    const Courses =props.Courses;
    const category=props.category;

    const [likedCourse,setLikedCourse]=useState([]);
   
    const getCourses = () => {
        if(category=='All'){
            let allCourses = [];
            if (Courses != null) {
                Object.values(Courses).forEach(courseCategory => {
                    courseCategory.forEach(course => {
                        allCourses.push(course);
                    });
                });
                console.log(allCourses);
            }
            console.log(allCourses);
            return allCourses;
        }else{
            return Courses[category];
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
                {getCourses().map((course) => (
                    <Card key={course.id} course={course}  likedCourse={likedCourse} setLikedCourse={setLikedCourse}/>
                ))}
        </div>
    );
};

export default Cards;
