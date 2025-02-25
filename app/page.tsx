
"use client";


import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';

function Search() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  return <>{search}</>
}

const Admin = () => {

 

  return (
    <section className="flex size-full flex-col gap-3 ">
 
 <Suspense>
      <Search />
    </Suspense>
  
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
