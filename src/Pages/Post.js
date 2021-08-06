import { useParams, useLocation } from 'react-router-dom'

const Post = () => {

    console.log(useParams()) 

    {/* fetch an id from the url */}

    console.log(useLocation())

    const query = new URLSearchParams(useLocation().search)


    return (
        <h1>{query.get('first')}</h1>
    )
}

export default Post