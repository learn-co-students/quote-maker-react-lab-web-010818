
const addQuote = function(quote) {
	return {
		type: 'ADD_QUOTE',
		quote
	}
}

const removeQuote = function(quoteId) {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quoteId
  }
}

const upvoteQuote = function(quoteId) {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: quoteId
  }
}

const downvoteQuote = function(quoteId) {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: quoteId
  }
}

export {addQuote, removeQuote, upvoteQuote, downvoteQuote}
