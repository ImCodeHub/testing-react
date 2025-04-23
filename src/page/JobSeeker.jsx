import React from 'react'

const JobSeeker = () => {
  const handleLogout = () =>{
    localStorage.removeItem("access_token");
    window.location.href = "/";
  }
  return (
    <div>
        <h1>this is from Job Seeker page</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default JobSeeker