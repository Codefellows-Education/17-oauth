'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js');

const WPTS = `https://public-api.wordpress.com/oauth2/token?`
const SERVICE = 'https://public-api.wordpress.com/rest/v1/me/';
const redirect = `http://localhost:3000/oauth`;




/**
 *This function is called inside our oauth route. It has a lot of functionality. From top to bottom the process goes as follows.
 1. Makes a call to superagent asking for a authorization token from Word Press.
 2. Uses the token in the authorization header for a call to the Word Press api to obtain user information.  
 3. Uses the response data to create an instance in our database
 4. Generates and returns an Authentication token for that instance
 *
 * @param {Object} 
 * @returns Authentication token
 */
module.exports = function(request){

  return superagent.post(WPTS)
  .type('form')
    .send({
      client_id : process.env.WP_CLIENT_ID,
      redirect_uri : redirect,
      client_secret : process.env.WP_CLIENT_SECRET,
      code : request.query.code, // The code from the previous request
      grant_type : 'authorization_code'
    })
    .then(response => {
      let access_token = response.body.access_token;
      return access_token;
    })
    .then(token => {
      return superagent.get(SERVICE)
      .set(`Authorization`, `Bearer ${token}`)
      .then(response => {
        let user = response.body;
        return user
      })
    })
    .then(oauthUser => {
      return Users.createFromOauth(oauthUser.email);
    })
    .then(actualUser => {
      return actualUser.generateToken();
    })
    .catch(error => error);
  }




