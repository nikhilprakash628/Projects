import React, { useEffect, useState } from 'react'

function UserSearch() {
    const [searchText, setSearchText]=useState("nikhilprakash628");
    const [result,setResult]=useState(null);
    
    useEffect(()=>{
        handleSearch();
    },[])
    const handleSearch=async()=>{
        const res=await fetch(`https://api.github.com/users/${searchText}`,{
            method:"GET"
        });
        const jsonData=await res.json();
        console.log({jsonData});

        const formattedData={
            name:jsonData.name,
            bio:jsonData.bio,
            profile:jsonData.avatar_url,
            username:jsonData.login
        };
        setResult(formattedData);
    }

  return (
    <main>
        <h1>Github User Search</h1>
        <input type="text" value={searchText} placeholder='Github username' onChange={(e)=> setSearchText(e.target.value)}/>
        <button onClick={handleSearch}>search</button>
        {
            result?(
                <section>
                    <img  src={result.profile}  width={200} alt="github profile"/>
                    <h3>{result.name}</h3>
                    <p><i>{result.username}</i></p>
                    <p>{result.bio}</p>
                </section>
            ):null
        }
    </main>
  )
}

export default UserSearch