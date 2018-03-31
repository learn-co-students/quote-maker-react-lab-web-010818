export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const upvotedQuote = state.find(quote => quote.id === action.quoteId)
      const upvotedIndex = state.indexOf(upvotedQuote)
      const quotesWithUpvote = [...state]
      quotesWithUpvote[upvotedIndex] = {...upvotedQuote, votes: upvotedQuote.votes + 1}
      return quotesWithUpvote
    case 'DOWNVOTE_QUOTE':
      const quotesWithDownvote = [...state]
      const downvotedQuote = state.find(quote => quote.id === action.quoteId)
      if (downvotedQuote.votes > 0) {
        const downvotedIndex = state.indexOf(downvotedQuote)
        quotesWithDownvote[downvotedIndex] = {...downvotedQuote, votes: downvotedQuote.votes - 1}
      }
      return quotesWithDownvote
    default:
      return state
  }
}
