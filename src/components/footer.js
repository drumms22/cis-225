import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div
          id='footer'
          className='container-fluid align-items-center p-0 m-0 row border-top border-dark bg-dark text-white backgroundColor'>
          <div className='col footer-content text-center'>
            <p>123 first st, Dearborn, Mi 48141</p>
            <p>555-123-4567</p>
            <p>thepizzaparlor@gmail.com</p>
          </div>
          <div className='col footer-content text-center'>
            <p>The Pizza Parlor &copy;</p>
          </div>

          <div className='col footer-content text-center'>
            <h5>
              <u>Leave a like on:</u>
            </h5>
            <div>
              <p className='text-light'>Facebook</p>
            </div>
            <div>
              <p className='text-light'>Google reviews</p>
            </div>
            <div>
              <p className='text-light'>BBB</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
