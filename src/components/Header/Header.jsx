import React from 'react'
import { newGame, resetScore } from '../../redux/cardsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const score = useSelector(state => state.cards.score);
  const dispath = useDispatch();

  function handleGame() {
    dispath(newGame())
    dispath(resetScore())
  }

  return (
     <header className=' w-full flex  justify-center pt-7'>
      <div className='flex flex-col text-center items-center'>
        <h1 className=' text-3xl font-bold text-green-950'>Middle Earth Memory Game</h1>
        <h2 className='text-xl mt-2 font-semibold text-green-950'>Score : { score }</h2>
        <button
          className=' w-2/4 mt-3 focus:outline-none text-white bg-green-950 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
          type='button' onClick={handleGame}
        >
          New Game
        </button>
      </div>
    </header>
  )
}

export default Header