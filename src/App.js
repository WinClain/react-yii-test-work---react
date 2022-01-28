import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
    const [ statePosts, setStatePosts] = useState([]);
    let params = 'default';

    const getPosts = async () => {
        const data = await fetch('http://localhos/api/get-posts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    params,
                })
            });
        const result = await data.json();
        setStatePosts(result.posts);
    }

    const deletePosts = async () => {
        const data = await fetch('http://localhos/api/delete-posts',
            {
                method: 'GET',
            });
        setStatePosts([]);
    }

    const updatePosts =(filte) =>{
        params = filte;
        getPosts();
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='container mt-5'>
            <Form onUpdatePosts={getPosts}/>
            <List posts={statePosts} onDeleteAll={deletePosts} onUpdatePosts={updatePosts}/>
        </div>
    );
}

export default App;
