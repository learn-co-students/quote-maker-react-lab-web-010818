import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => {
                return <QuoteCard key={quote.id}
                                  quote={quote}
                                  upvoteQuote={this.props.upvoteQuote}
                                  downvoteQuote={this.props.downvoteQuote}
                                  removeQuote={this.props.removeQuote}/>
              })/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote, upvoteQuote, downvoteQuote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
