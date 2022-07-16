import PropTypes from 'prop-types'; 

import s from './feedback.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const elements = options.map(option => (
        <button
            className={s.button}
            key={option}
            onClick={() => onLeaveFeedback(option)}
        >{option }</button>
    ))
    return (
        <div className={s.container}>
            {elements}
        </div>
    )
}

FeedbackOptions.defaultProps = {
    options: [],
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions