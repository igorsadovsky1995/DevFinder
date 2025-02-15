import { useState } from 'react'
import './App.css'
import { LocalGitHubUser , GitHubError} from './types/index'
import { Container } from './Components/Container/Container'
import { Header } from './Components/Header/Header'
import { Search } from './Components/Search/Search'
import { UserCard } from './Components/UserCard/UserCard'
import { defaultUserMock } from './mock'
import { isGitHubUser } from './utils/typeGuards'
import { extractLocalUser } from './utils/exract-local-user'

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUserMock)

  const featchUser = async (username:string)=> {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as LocalGitHubUser | GitHubError;

    if(isGitHubUser(user)){
      setUser(extractLocalUser(user))
      console.log(!user)
    }else{
      setUser(null)
    }

  }

  return (
    <Container>
      <Header/>
      <Search hasError={!user} onSubmit={featchUser}/>
      {
        user && (
          <UserCard {...user}/>
        ) 
      }
      
    </Container>
  )
}

export default App
