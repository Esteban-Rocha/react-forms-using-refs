import React, { Component } from 'react';

class RefsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // a set of radios only has one value
    console.log(pet, pet.value);
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <label>
            Cat
            <input type="radio" value="cat" name="pet" />
          </label>
          <label>
            Dog
            <input type="radio" value="dog" name="pet" />
          </label>
          <label>
            Ferret
            <input type="radio" value="ferret" name="pet" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RefsForm;
