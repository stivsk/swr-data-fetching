import { useState } from 'react'
import useSWR from 'swr'

interface IUsePokemonListProps {
  limit?: number
}

interface IUsePokemonsList {
  pokemons: Array<object>
  isLoading: boolean
  isError: boolean
  hasNext: boolean
  hasPrev: boolean
  nextPage: Function
  prevPage: Function
}

const usePokemonsList = ({
  limit = 20,
}: IUsePokemonListProps = {}): IUsePokemonsList => {
  const [offset, setOffset] = useState(0)

  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )

  const nextPage = () => setOffset(po => po + limit)

  const prevPage = () => setOffset(po => Math.max(po - limit, 0))

  return {
    pokemons: data.results,
    isLoading: !error && !data,
    isError: error,
    nextPage,
    prevPage,
    hasNext: data.next,
    hasPrev: data.previous,
  }
}

export default usePokemonsList
