/***
 Pre-work for Day 2 (Intro to node.js)

Read the following short articles to begin learning some of node.js’s conventions with regards to callbacks and error handling.
https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/
https://nodejs.org/en/knowledge/errors/what-are-the-error-conventions/

Use the code from here for your email validation logic:
https://web.archive.org/web/20210801201220/https://ui.dev/validate-email-address-javascript/

Now, let’s apply these concepts! You are going to write a simple email address validator using node.js callback conventions.
The thing is, our email address validator will be fed the email address one character at a time - just like if the user was typing their email address into an html form file! We will simulate this with an array, but the code we write will be designed so it would work just fine if we were checking user input as they typed!
This touches on core concepts in node.js, and in frontend programming in general: events and streams. We’ll be simulating a stream with an array, but the code will be just the same.

***/

export const goodEmail = 'foo.bar@gmail.com';
export const badEmail = 'foobaratgmail.com';

export function validateEmailAddress(email: string, fetchInputCallback: any, validateEmailCallback: any) {
  // return fetchInputCallback(null, { email, index: 0, isValid: false }, handleInputCallback);
  const data = { email, index: 0, isValid: false};
  let hasMoreChunks = true;

  while (hasMoreChunks) {
    console.log('has chunks')
    setTimeout(() => {
      console.log('in timeout')
      fetchInputCallback(null, data, hasMoreChunks, validateEmailCallback);
      // super important - increment index so we fetch the next chunk of the input
    }, 300);
  }
}

// This uses a 300ms timeout (delay) to simulates user input from a keyboard, one character at a time.
export const fetchInput = (err: any, data: any, hasMoreChunks: boolean, validateEmailCallback: any) => {
  if (data.index == data.email.length) {
    hasMoreChunks = false;
    return;
  }
  // super important - increment index so we fetch the next chunk of the input
  data.index += 1;
  console.log('index is ' + data.index);
  const chunk = data.email.slice(0, data.index);
  validateEmailCallback(chunk, data.isValid);
};

export const inputHandler = (chunk: any, isValid: any) => {
  isValid = emailIsValid(chunk);
  console.log(`${chunk} is valid email: ${isValid}`);
}

export const emailIsValid = (email: string): boolean  => /\S+@\S+\.\S+/.test(email);

