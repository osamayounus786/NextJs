import { useState } from 'react'
function CommentsPage() {
  const [comments, setComments] = useState([]) // get request method
  const [comment, setComment] = useState('') // post request method
  
  const fetchComments = async () => { // get request method
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }

  const submitComment = async () => { // post request method
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  
  return (
    <>
     {/* // post request method */}
      <div>
        <input
          type='text'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit comment</button>
      </div>
      <hr />
      {/* // get request method */}
      <button onClick={fetchComments}>Load comments</button> 

      {comments.map(comment => {
        return (
          <div key={comment.id}>
            {comment.id}. {comment.text}
            
          </div>
        )
      })}
    </>
  )
}

export default CommentsPage