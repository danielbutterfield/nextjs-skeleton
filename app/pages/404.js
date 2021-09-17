import { NavigationMenu } from '../components'
import { routing } from '../routing'
import Image from 'next/image'
import pokemonGif from '../public/pokemon.gif'

const Custom404 = () => {
  return (
    <>
      <NavigationMenu links={routing} />
      <div className="error404">
        <div>
          <p>🚔 Hmm, you shouldn't be here. Turn back! 🚔</p>
          <Image src={pokemonGif} alt="Something" />
        </div>
      </div>
    </>
  )
}

export default Custom404
