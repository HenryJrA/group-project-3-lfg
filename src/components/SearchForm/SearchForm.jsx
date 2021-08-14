import React, { Component } from 'react'
import { Form } from 'semantic-ui-react';

class Search extends Component {
  state = { 
    invalidForm: true,
    formData: {
    query: '',
    type: '',
  },
}

formRef = React.createRef()

handleChange = e => {
  const formData = {...this.state.formData, [e.target.name]: e.target.value};
  this.setState({
  formData,
  invalidForm: !this.formRef.current.checkValidity()
  });
};

handleSubmit = e => {
  e.preventDefault();
  this.props.history.push(`/search/${this.state.formData.type}s/byName/${this.state.formData.query}`)
};

  render() { 
    return ( 
      <>
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        >
          <input
          type="text"
          name="query"
          value={this.state.formData.query}
          onChange={this.handleChange}
          placeholder='Search events'
          />
        </form>
      </>
     );
  }
}
 
export default Search;