'use strict';

const uuid = require('uuid')

// Only for testing
const hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully! ' + uuid.v4(),
        input: event,
      },
      null,
      2
    ),
  }
}

module.exports = {
  hello
}