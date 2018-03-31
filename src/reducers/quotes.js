export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return [...state].filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let quote = [...state].find(q => q.id === action.quoteId)
      quote.votes ++
      return [...state]
    case 'DOWNVOTE_QUOTE':
      let toDecrease = [...state].find(q => q.id === action.quoteId)
      if (toDecrease.votes > 0) {
        toDecrease.votes --
      }
      return [...state]
    default:
      return state
  }
}
