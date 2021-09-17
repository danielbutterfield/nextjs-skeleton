import React from 'react'
import { ContainerFlex, Header, NavigationMenu } from '../components'

const routing = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Projects', url: '/projects' },
  { text: 'Contact', url: '/contact' },
]

const Home = () => {
  return (
    <>
      <NavigationMenu links={routing} />
      <div className="app">
        <Header>Next.js Skeleton ☠️</Header>
        <ContainerFlex>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </ContainerFlex>
      </div>
    </>
  )
}

export default Home
