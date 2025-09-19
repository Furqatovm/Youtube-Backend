import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Product = () => {
    const [data, setData] =useState([]);
    const {id} =useParams();
    useEffect(() =>{
        axios.get("https://68b6da3a73b3ec66cec2ef52.mockapi.io/Asaxiy/todo").then((res) => setData(res.data)).catch((err) =>console.log(err));
    }, [id])
  return (
    <div>
        {data.map((val) => {
            if(val.id ==id){
                return (
                    <div className='w-[40%] text-white'>
                        <h1>{val.title}</h1>
                        <p>{val.description}</p>
                        <img src={val.image} alt="" />
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Product