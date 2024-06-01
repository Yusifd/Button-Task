import { useState } from "react"
import Hint from "./Hint"
import Warn from "./Warn"
import PropTypes from 'prop-types'
export default function Button(props) {

let [popUp, setPopUp] = useState(false)
let [modalActive, setModalActive] = useState(false)

    return (
        <>
        <div className="button">
            <button className={`${modalActive && 'button-clicked'}`}
                    onClick={() => setModalActive(!modalActive)}
                    onMouseOver={() => setPopUp(true)}
                    onMouseLeave={() => setPopUp(false)}>
                    
                    
            {props.text}
            </button>
            {popUp && <Hint hint = {props.hint}/>}
            {modalActive && <Warn warnMessage = {props.warnMessage}/>}
        </div>
        
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

Button.defaultProps = {
    text: 'SHOW WARN MESSAGE'
}
