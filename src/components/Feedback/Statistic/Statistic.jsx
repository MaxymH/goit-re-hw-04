import PropTypes from 'prop-types'; 

import s from './statistic.module.css'

const Statistic = ({ good, neutral, bad ,total, positivePercentage}) => {
    return (
        <ul className={s.container}>
            <li className={s.item}>Добре: {good}</li> 
            <li className={s.item}>Непогано: {neutral}</li> 
            <li className={s.item}>Погано: {bad}</li> 
            <li className={s.item}>Залишено відгуків: {total}</li>
            <li className={s.item}>Позитивних Відгуків: {positivePercentage }%</li>
        </ul>
    )
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistic