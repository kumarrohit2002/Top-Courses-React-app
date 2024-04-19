import React from "react";

const Filter = (props) => { 
    const filterData = props.filterData; 
    const category=props.category;
    const setCategory = props.setCategory;

    function filterHandelar(title){
            setCategory(title);
    }


    return (
        <div className="w-11/12 text-center flex flex-wrap max-w-max space-x-4 
                        gap-y-4 mx-auto py-4 items-center justify-center">
            {filterData.map((data) => ( 
                <button className={`text-lg px-2 py-1 rounded-md font-medium text-white
                bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
                ${category===data.title? ("bg-opacity-50 border-white"):("bg-opacity-40 border-transparent")}`}
                onClick={()=>filterHandelar(data.title)}>  

                    {data.title}
                </button>
            ))}
        </div>
    );
}


export default Filter;
