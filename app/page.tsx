
"use client";

import { useRouter } from "next/navigation";
import {
  doc,
  deleteDoc,
  query,
  where,
  orderBy,
  collection,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";


import { useState,useEffect } from "react";
import { db } from "../lib/firebase";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'


const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
 
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        Assignments
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

const admin = () => {
  const router = useRouter();

  
const[category,setCategory]=useState<String>("Computer")
const[level,setLevel]=useState<String>("Level 100")
 
  const [loading, setLoading] = useState(true);
  const [topicloading, setTopicLoading] = useState(true);
  const [assignments, setAssignments] = useState<any>();
  const [topics, setTopics] = useState<any>();
  const[editOpen,setEditOpen]=useState(false)
  const[video,setVideo]=useState("")
  const[title,setTitle]=useState("")
  const[docid,setDocid]=useState("")
  const[inputs,setInputs]=useState({course:"",description:"",image:"",type:"",subject:"",resource:""})
  const fetchPost = async () => {
    const q = query(collection(db, "courses"),orderBy("subject","desc"));
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id }));
   
    setAssignments(newData.filter(data=>{return data.category==category}));
    setLoading(false);
    console.log("data",newData)
  };
  const fetchTopics = async () => {
    const q = query(collection(db, "topics"),orderBy("course", "desc"));
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id }));
   
    setTopics(newData.filter(data=>{return data.level==level}));
    setTopicLoading(false);
    console.log("data",newData)
  };
  const handlesubmit=async () => {
    setLoading(true);
    try {
      
      const docRef = await addDoc(collection(db, "courses"), {
       ...inputs,category:category,resourse:inputs.resource
      });
     setEditOpen(false)
     fetchPost()
    } catch (e) {
      console.error("Error adding document: ", e);
     alert("something went  wrong")
    }
  };
  const handlEdit=async()=>{
    setLoading(true);
    await updateDoc(doc(db, "courses", docid), {
     ...inputs,
   
    })
      .then(() => {
      fetchPost()
        setLoading(false);
        setEditOpen(false)
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchPost();
    fetchTopics()
  }, [category,level]);
  const startRoom = async () => {
   
  };

const handleAdd=async()=>{
  setLoading(true);
  try {
    
    const docRef = await addDoc(collection(db, "Topics"), {
    course:item.course
    });
   setEditOpen(false)
   fetchPost()
  } catch (e) {
    console.error("Error adding document: ", e);
   alert("something went  wrong")
  } 
}
const searchParams = useSearchParams()
 
const search = searchParams.get('search')
  return (
    <section className="flex size-full flex-col gap-3 ">
 
 <>Search: {search}</>
  
		<div className="form-group">
			<label >Name:</label>
			<input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
		</div>
		<div className="form-group">
			<label >Email:</label>
			<input type="email" className="form-control" id="email" placeholder="Email" name="email"/>
		</div>
		<div className="form-group">
			<label >Phone:</label>
			<input type="text" className="form-control" id="phone" placeholder="Phone" name="phone"/>
		</div>
		<div className="form-group" >
			<label >City:</label>
			<select name="city" id="city" className="form-control">
				<option value="">Select</option>
				<option value="Delhi">Delhi</option>
				<option value="Mumbai">Mumbai</option>
				<option value="Pune">Pune</option>
			</select>
		</div>
		<div className="form-group">
			<label >Password:</label>
			<input type="password" className="form-control" id="password" placeholder="Password" name="password"/>
		</div>
		<input type="button" name="save" className="btn btn-primary" value="Register" id="butsave"/>

 
    </section>
  );
};

export default admin;
