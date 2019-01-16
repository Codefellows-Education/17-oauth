'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js');

const API = 'http://localhost:3000';
const WPAS = `https://public-api.wordpress.com/oauth2/authorize?client_id=${process.env.WP_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth&response_type=code`;
const WPTS = `https://public-api.wordpress.com/oauth2/token?`
const SERVICE = 'https://public-api.wordpress.com/rest/v1/me/';
const redirect = `http://localhost:3000/oauth`;

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
      console.log('!!!!!!!!!!!!!!');
      return access_token;
    })
    .then(token => {
      console.log('this is our token', token);
      return superagent.get(SERVICE)
      .set(`Authorization`, `Bearer ${token}`)
      .then(response => {
        let user = response.body;
        console.log('(3)', user);
        return user
      })
    })
    .then(oauthUser => {
      console.log('(4) create our acct');
      return Users.createFromOauth(oauthUser.email);
    })
    .then(actualUser => {
      return actualUser.generateToken();
    })
    .catch(error => error);
  }

  
  // .then(tokenObj => {
  //   console.log('(4) got the token obj');
  //   let token = tokenObj.access_token;
  // })


