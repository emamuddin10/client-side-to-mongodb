
import './App.css'

function App() {
  
const handleAddUser = e =>{
  e.preventDefault()
  console.log(e.target)
  const form= e.target
  const name = form.name.value
  const email = form.email.value 
  const user= {name,email}
  console.log(user)
  fetch('http://localhost:5000/users',{
    method: "POST",
    headers:{
      'content-type':"application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      alert('Users Added successfully')
      form.reset()
    }
  })
}
  return (
    <>
      <h1>Simple Crud Server</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
