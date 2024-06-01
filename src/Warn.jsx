import PropTypes from 'prop-types'
export default function Warn(props) {
    return(
        <>
            <p className='warn'>{props.warnMessage}</p>
        </>
    )
}

Warn.propTypes = {
    warnMessage: PropTypes.string
}

Warn.defaultProps = {
    warnMessage: 'THIS IS THE WARN MESSAGE'
}

