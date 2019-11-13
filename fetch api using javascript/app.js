const gePost = () => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => console.log(posts))
}

const post ={
  title: 'all about fetch!';
  body: 'Fetch is so coll!',
  userId: 1
}

const newPost  = post => {
  const options = {
    method: 'POST', //put and delete method use 
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }

  return fetch(`http://jsonplaceholder.typicode.com/posts`, options)
 .then(res => res.json())
 .then(res => console.log(res))
 .catch(error => console.error(`Error: ${error}`))
}
 newPost(post)



 // second type api

fetch('http://some-site.com/cors-enabled/some.json', { mode: 'cors' })
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        console.log('Request successful', text);
    })
    .catch(function (error) {
        log('Request failed', error)
    });




    // first api
    const userAction = async () => {
  const response = await fetch('http://example.com/movies.json');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}


// second api
const userAction = async () => {
  const response = await fetch('http://example.com/movies.json', {
    method: 'POST',
    body: myBody, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}