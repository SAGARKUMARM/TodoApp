import React, { useState } from "react"
function TodoList() {
    const [activity, Setactivity] = useState(" ")
    const [listData, SetListData] = useState([ ])
    function addActivity()
    {
        // SetListData([...listData,activity])
        // console.log(listData)
        SetListData((listData)=>{
            const updatedList=[...listData,activity]
            console.log(updatedList)
            Setactivity('');
            return updatedList
        })
    }
    function removeActivity(i)
    {
        const updatedListData=listData.filter((elem,id)=>{
            return i!=id;
        })
        SetListData(updatedListData);
    }
    function removeAll()
    {
        SetListData([])
    }
    return (
        <>
            <div className='container'>
                <div className='header'>TODO List</div>
                <input type='text' placeholder="Enter your task " value={activity} onChange={(e)=>Setactivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className="List-heading">Your List here : </p>
                {listData!=[] && listData.map((data,i)=>{
                    return (
                        <>
                        <p key={i}>
                            <div className="listData">{data}</div>
                            <button className="btn-position" onClick={()=>
                                removeActivity(i)}>Remove(-)</button>
                        </p>
                        </>
                    )
                })}
                {listData.length>=1 && 
                <button  onClick={removeAll}>Remove all</button>}
            </div>
        </>
    )
}
export default TodoList;