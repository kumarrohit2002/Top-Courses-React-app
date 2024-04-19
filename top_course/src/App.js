import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { apiUrl, filterData } from './data';
import Filter from './components/Filter';
import { toast } from 'react-toastify';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something Went Wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  return (
    <div className="bg-slate-700 min-h-[100vh]">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div>
          <Filter 
          filterData={filterData} 
          category={category}
          setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner />) : (<Cards Courses={courses}  category={category}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
