
"use client";


import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';
import { addDoc } from "firebase/firestore";
import { useState,useEffect } from "react";
import { db } from "../lib/firebase";
import {
	
	collection,
	
  } from "firebase/firestore";
 
 

const Admin = () => {
	const searchParams = useSearchParams()
	const name = searchParams.get('name');
	const  english= searchParams.get('english')
	const  englishscore= searchParams.get('englishscore')
	const  sub1= searchParams.get('sub1')
	const  sub1score= searchParams.get('sub1score')
	const  sub2score= searchParams.get('sub2score')
	const  sub3score= searchParams.get('sub3score')
	const  sub2= searchParams.get('sub2')
	const  sub3= searchParams.get('sub3')
	const [loading, setLoading] = useState(true);
	const handlesubmit=async () => {
		setLoading(true);
		try {
		  
		  const docRef = await addDoc(collection(db, "cbtexams"), {
		   name:name,english:english,sub1:sub1,sub2:sub2,sub3:sub3,sub1score,sub2score,sub3score
		  });
			} catch (e) {
		  console.error("Error adding document: ", e);
		 alert("something went  wrong")
		}
	  };
	  useEffect(() => {
		handlesubmit()
		
	  }, []);

  return (
    <section className="flex size-full flex-col gap-3 ">
 
 
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

export default Admin;
