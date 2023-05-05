import { useRef } from "react"
import Input from "../input"

const Form = () => {
    const inputRef1 = useRef(0)
    const inputRef2 = useRef(0)

    const clickHandler1 = () => {
        inputRef1.current.focus()
    }

    const clickHandler2 = () => {
        inputRef2.current.focus()
    }

    return <div className="form">
    <div>
        <input ref={inputRef1} data-ref="inputRef" type="text" />
        <button onClick={clickHandler1}>Focus input</button>
    </div>
    <div>
        <Input type="text" ref={inputRef2} />
        <button onClick={clickHandler2}>Focus input</button>
    </div>
    </div>
}

export default Form