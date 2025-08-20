
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

function App() {

  return (
    <>
      <Greeting name={"asher"} messageCount={5}/>
      <Counter />
      <UserCard name="Ron" role='Customer service rep'/>
      <UserCard name='Dan' age={36} role='HR Manager'/>
      <UserList />
    </>
  )
}

export default App
