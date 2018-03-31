import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: '',
    }
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit = event => {
    console.log("submitting")
    event.preventDefault()
    const newQuote = { id: uuid(), content: this.state.content, author: this.state.author, votes: 0}
    this.props.addQuote(newQuote)
    this.setState({content: '', author: ''})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea onChange={this.handleOnChange}
                        className="form-control"
                        name='content'
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        name='author'
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(QuoteForm);
