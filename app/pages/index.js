import React from 'react'
import { ContainerFlex, Header, NavigationMenu } from '../components'
import { routing } from '../routing'

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
