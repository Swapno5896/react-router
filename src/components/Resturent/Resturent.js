import React, { useEffect, useState } from 'react';

const Resturent = () => {
    const [searchText, setSsearchText] = useState('')
    const [meal, setMeal] = useState([])
    const searchFood = e =>{
        setSsearchText(e.target.value)
    }
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeal(data.meals))
        
    },[searchText])
    console.log(meal)
    return (
        <div>
            <h2>Thsi is resturent <br />
            We have {meal.length}</h2>
            <input onChange={searchFood} type="text" />
        </div>
    );
};

export default Resturent;