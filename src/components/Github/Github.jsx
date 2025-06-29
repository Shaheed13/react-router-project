import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src="https://tse3.mm.bing.net/th/id/OIP.Nky-hL3SMQdXURNFoohZOAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shaheed13')
    return response.json()
}