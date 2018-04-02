import React from 'react';

const QuoteCard = (props) =>{
  const { id, content, author, votes } = props.quote

  const handleDelete = () => {
    console.log(id)
    props.removeQuote(id)
  }

  const handleUpvote = () => {
    props.upvoteQuote(id)
  }

  const handleDownvote = () => {
    props.downvoteQuote(id)
  }


  return (
    <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{content}</p>
          <footer>- author <cite title="Source Title">{author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleUpvote(id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={ () => handleDownvote(id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {votes}</div>
      </div>
    </div>
  </div>
  )
}

export default QuoteCard
