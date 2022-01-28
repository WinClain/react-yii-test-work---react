import React,{useState,useEffect} from "react";

export const Form = props => {
    const [titleValue,setTitleValue] = useState('');
    const [contentValue,setContentValue] = useState('');
    const [posts,setPosts] = useState([]);

    const createPost = async () => {
        const data = await fetch('http://localhos/api/create-post',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    title: titleValue,
                    content: contentValue
                })
            });
        setTitleValue('');
        setContentValue('');
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        await createPost();
        props.onUpdatePosts();
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" value={titleValue} onChange={(event)=>setTitleValue(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Body</label>
                <input type="text" className="form-control" value={contentValue} onChange={(event)=>setContentValue(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;