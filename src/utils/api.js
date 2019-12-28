
const baseURL = 'http://13.127.240.227:9000'


const signInUserURL = `${baseURL}/usersignin`
const createUserURL = `${baseURL}/usersignup`
const createPostURL = `${baseURL}/post`
const postsURl = `${baseURL}/getallpost`
const deletePostURL = `${baseURL}/deletePost`




const getToken = () => localStorage.getItem('token')
const signInUser = user => {
  console.log(user);
    return fetch(signInUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      credentials: 'include',
      body: JSON.stringify({
        email: user.userEmail,
        password: user.userPassword
      })
    }).then(res => res.json())
      .catch(e => console.log(e))
  }

  const createUser = user => {
    return fetch(createUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: user.fullName,
        email: user.email,
        password: user.password
      })
    }).then(res => res.json())
  }

  const createPost = post => {
    const token = getToken()
    return fetch(createPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title: post.title,
        description: post.description,
      })
    }).then(res => res.json())
  }


  const getPosts = () =>{
   return  fetch(postsURl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }).then(res => res.json())

  }

  const deletePost = id =>
  fetch(`${deletePostURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json())
  export {signInUser,createUser,createPost,getPosts,deletePost};