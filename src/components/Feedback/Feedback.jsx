import { Component } from 'react';


import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const options = ['good', 'neutral', 'bad']

class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }


    onClick = item => {
    this.setState(prevState => ({
        [item]: prevState[item] + 1,
    }));
    };

    TotalFeedback() {
    const items = Object.values(this.state);
    const total = items.reduce((item, acc) => (acc += item), 0);
    return total;
    }

    PositivePercentage() {
    const total = this.TotalFeedback();
    const goodFeedback = this.state.good;
    return (Math.ceil((goodFeedback / total) * 100)) ;
    }


    render() {
        const {good, neutral, bad} = this.state
        const total = this.TotalFeedback()
        const percentage = this.PositivePercentage();
        const positivePercentage = percentage ? percentage : 0;
        return (
            <>
                <Section title='Будь ласка залиште ваш відгук'>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.onClick}
                    />
                </Section>


                <Section title='Статистика'>
                    { total ? <Statistic
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    /> : 
                        <Notification message='Ви не залишили відгук'/>
                    }
                </Section>
            </> 
        )
    }
}

export default Feedback