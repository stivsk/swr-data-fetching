import BulletListLoader from '../BulletListLoader/BulletListLoader'
import withSuspense from '../../HOCs/withSuspense'
import usePokemonsList from '../../hooks/usePokemonsList'

const PokemonsList = () => {
  const { pokemons, nextPage, prevPage, hasNext, hasPrev } = usePokemonsList()

  return (
    <div>
      <ul>
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={!hasPrev} onClick={() => prevPage()}>
        Prev
      </button>
      <button disabled={!hasNext} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  )
}

export default withSuspense(BulletListLoader)(PokemonsList)
