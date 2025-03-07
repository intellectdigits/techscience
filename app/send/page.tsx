
"use client";
import { FormEvent } from 'react'
 
export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api', {
      method: 'POST',
      body: "{'id':'kkkjkjk'}",
    })
 
    // Handle response if necessary
    //const data = await response.json()
  console.log(formData)
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text"  name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}