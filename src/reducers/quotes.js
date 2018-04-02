import uuid from 'uuid';

const defaultState = []



export default (state = defaultState, action) => {
  let quote
  let filteredState
  switch (action.type) {
    case 'ADD_QUOTE':
      quote = {...action.quote, id: uuid()}
      return [...state, quote];
      break;
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
      break;
    case 'UPVOTE_QUOTE':

      quote = state.find(quote => quote.id === action.quoteId)
      ++quote.votes
      filteredState = state.filter(quote => quote.id !== action.quoteId)
      return [...filteredState, quote]
      break;
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      quote.votes !== 0 ? --quote.votes:quote.votes
      filteredState = state.filter(quote => quote.id !== action.quoteId)
      return [...filteredState, quote]
      break;
    default:
      return state
  }
}
