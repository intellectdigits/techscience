
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
 
  useEffect(() => {
   
  }, [category,level]);
  const startRoom = async () => {
   
  };


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
