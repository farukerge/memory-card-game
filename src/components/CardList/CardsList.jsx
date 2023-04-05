import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeToggle, increment, scoreDecrement, scoreIncrement } from '../../redux/cardsSlice'
import cardBack from '../../assets/images/cardback.jpg'
function CardsList() {

    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards.items)
    const [selectedCards, setSelectedCards] = useState([]);

    let choiceOne, choiceTwo;

    useEffect(() => {
        if (selectedCards[0] && selectedCards[1]) {

            choiceOne = selectedCards[0].key;
            choiceTwo = selectedCards[1].key;


            if (choiceOne == choiceTwo) {
                setSelectedCards([]);
                dispatch(increment())
                dispatch(scoreIncrement())


            } else {
                setTimeout(() => {
                    dispatch(activeToggle(selectedCards[0].id))
                    dispatch(activeToggle(selectedCards[1].id))
                    dispatch(scoreDecrement())

                    setSelectedCards([])
                }, 500)

            }

            if(selectedCards.length === 15){
                
            }


        }
    }, [selectedCards])



    function handleClick(card) {

        dispatch(activeToggle(card.id))
        setSelectedCards([...selectedCards, card])
    }


    return (
        <section className='flex flex-wrap max-w-[900px]  mx-auto gap-3  justify-center mt-[5rem] '>
            {
                cards.map(card => (
                 
                         <div
                        key={card.id}
                        className={`card  ${card.status ? 'active' : ''} ${selectedCards.length === 2 ? 'disabled' : ''}`} onClick={() => handleClick(card)}>
                        <div className=' back'><img src={cardBack} alt="cardback" /></div>
                        <div className='front'>
                            <img  src={card.img} alt={ card.title } />
                        </div>
                    </div>
                   
                ))
            }
        </section>
    )
}

export default CardsList