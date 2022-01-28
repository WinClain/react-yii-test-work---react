import React,{useState} from "react";

export const List = props => {

    return (
        <div className="container mt-5">
            <button onClick={()=>props.onDeleteAll()} className="btn btn-primary mr-1">Delete All</button>
            <button onClick={()=>props.onUpdatePosts('random')} className="btn btn-primary mr-1">Random</button>
            <button onClick={()=>props.onUpdatePosts('minute')} className="btn btn-primary mr-1">Last Minute</button>
            <button onClick={()=>props.onUpdatePosts('old_to_now')} className="btn btn-primary">Old to Now</button>

            <div className="list-group mt-2">
                {props.posts.map((item,key)=>(
                    <span key={key} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{item.title}</h5>
                        </div>
                        <p className="mb-1">{item.content}</p>
                    </span>
                ))}
            </div>
        </div>
        
    )
}

export default List;