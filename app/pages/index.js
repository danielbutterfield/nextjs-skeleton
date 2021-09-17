import React, { useState } from 'react'
import { Button, ContainerFlex, Header, NavigationMenu } from '../components'
import { routing } from '../routing'

const Home = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1)

  const reduceCount = () => setCount(count - 1)

  return (
    <>
      <NavigationMenu links={routing} />
      <div className="app">
        <Header>Next.js Skeleton ☠️</Header>
        <ContainerFlex>
          <p>Current Count: {count}</p>
        </ContainerFlex>
        <Button onClickHandler={increaseCount}>Increase count</Button>
        <Button onClickHandler={reduceCount}>Reduce count</Button>
      </div>
    </>
  )
}

export default Home
