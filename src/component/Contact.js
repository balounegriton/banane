import React, { Component } from 'react';
import '../App.css';




class Contact extends Component {
  constructor() {
    super();

    this.state = {

    };
  }


  componentDidMount() {


  }





  render() {
    return (
      <div className="contact">


        <div>

          <input type="text" id="lname" name="lastname" placeholder="NAME" />
          <input type="text" id="lname" name="lastname" placeholder="EMAIL" />
          <form>
            <textarea placeholder="MESSAGE"></textarea>
          </form>
        </div>

        <div>

          <input type="text" id="lname" name="lastname" placeholder="NAME" />
          <input type="text" id="lname" name="lastname" placeholder="EMAIL" />
          <form>
            <textarea placeholder="MESSAGE"></textarea>
          </form>
        </div>



      </div>
    )
  }
}


export default Contact;
