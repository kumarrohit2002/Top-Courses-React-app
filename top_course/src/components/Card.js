import React, { useEffect } from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    const course=props.course;
    const likedCourses=props.likedCourse;
    const setLikedCourses=props.setLikedCourse;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //phele se like hai
            setLikedCourses((prev)=>prev.filter(((cid)=>cid !== course.id)));
            toast.warning("Liked Removed"); 
        }else{
            //phele se liked nhi hai
            if(likedCourses.length==0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="bg-white h-[40px] w-[40px] rounded-full absolute right-2 bottom-[-12px]  grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            (likedCourses.includes(course.id))?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                        {/* <FcLike fontSize="1.75rem"/> */}
                    </button>
                </div>
            </div>
            <div className="text-white p-2">
                <p className="font-weight-bold text-lg leading-6">{course.title}</p>
                <p className="mt-2">
                        {   
                            course.description.length>100?
                            (course.description.substring(1,100))+"...":
                            (course.description)
                        }
                </p>
            </div>
        </div>
    );
}

export default Card;