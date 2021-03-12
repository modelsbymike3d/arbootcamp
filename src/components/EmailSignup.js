import React, { useEffect } from 'react';
const axios = require('axios').default;

const EmailSignup = () => {
  useEffect(() => {
    document.getElementById('honey').style.display = 'none';
  });

  const submitForm = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    const payload = Object.fromEntries(data.entries());

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post('.netlify/functions/subscribe', payload, headers)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          alert(
            'Success! Keep an eye out for a confirmation email. You might need to check your Promotions or spam folder.'
          );
        } else {
          alert('Uh oh, something went wrong :(');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Unable to subscribe right now :(');
      });
  };

  return (
    <div>
      <div className="email-signup">
        <h2>Keep learning!</h2>
        <p></p>
        <p className="text-left">
          Do you like building Snapchat lenses and Instagram filters? Sign up for my newsletter!
          What's included?
        </p>
        <ul>
          <li>Filter trends</li>
          <li>Cool filters from the community</li>
          <li>Tips and tricks</li>
          <li>Tutorials</li>
        </ul>
        <p className="text-left">
          I promise not to spam with you with things like "shoutout for shoutout" requests. At most
          I'll send something out weekly, but it'll probably be closer to one or two times a month.
        </p>
        <p></p>
      </div>
      <form className="email-signup" onSubmit={submitForm}>
        <input
          type="email"
          className="form-control form-input"
          data-inputmask=""
          name="email"
          placeholder="Email"
          autoComplete="email"
          aria-label="Email address"
        />

        <input autoComplete="off" type="text" id="honey" name="honey" />

        <div className="ml-button-horizontal primary">
          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </div>

        <div className="ml-form-embedPermissions">
          <div className="ml-form-embedPermissionsContent horizontal privacy-policy">
            <p>
              You can unsubscribe anytime. For more details, review our{' '}
              <a href="https://arbootcamp.com/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailSignup;
