import React from 'react';
import '../css/NewComment.css';


class NewComment extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(event.target)
  };

  render() {
    return(
      <div>
        <form className="wrap" 
        onSubmit={this.onFormSubmit} 
        onReset={() => this.setState({term: ''})}
        >
          <i className="fa fa-comment" style={{fontSize:'36px'}}></i>
          <input 
            className="newComment" 
            placeholder="Add new public comment" 
            value={this.state.term} 
            onChange={this.onInputChange}
          /><br/><br/>
          <input className="butt" type="submit" value="Comment"/>
          <input className="butt" type="reset" value="Cancel" />
        </form>
      </div>
    );
  }
}

export default NewComment;