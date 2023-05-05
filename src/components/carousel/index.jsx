import { useRef } from 'react'
import './style.css'

const Carousel = () => {
    const ref1 = useRef(0);
    const ref2 = useRef(0);
    const ref3 = useRef(0);

    const gotToOne = () => {
        ref1.current.scrollIntoView({
            behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
        })
    }

    const gotToTwo = () => {
        ref2.current.scrollIntoView({
            behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
        })
    }

    const gotToThree = () => {
        ref3.current.scrollIntoView({
            behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
        })
    }

    return <>
    <button onClick={gotToOne}>Go to 1</button>
    <button onClick={gotToTwo}>Go to 2</button>
    <button onClick={gotToThree}>Go to 3</button>
    <ul className="container">
    <li ref={ref1} className="item1">1</li>
    <li ref={ref2} className="item2">2</li>
    <li ref={ref3} className="item3">3</li>
    </ul>
    </>
}

export default Carousel