import { useState} from 'react'
import s from './s.module.css'
import FeedbackOptions from './FeedbackOptions'
import Notification from './Notification'
import Section from './Section'
import Statistics from './Statistics'


export default function App ()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood( good + 1)
  }

const onClickNeutral = () => {
    setNeutral(neutral + 1)
  }

const onClickBad = () => {
    setBad(bad + 1)
  }

const countTotalFeedback=(good,neutral,bad)=> {
    return good + neutral + bad
  }
  
const countPositiveFeedbackPercentage = (good, total ) =>{
    return  good / total * 100
  }
const total = countTotalFeedback(good, neutral, bad)

const positivePercentage = countPositiveFeedbackPercentage(good, total)

  return (
      <section className={s.section}>
        <>
          <Section title="Please leave feedback"></Section>
          <FeedbackOptions
            good={onClickGood}
            neutral={onClickNeutral}
            bad={onClickBad}
          />

          {total ? (
            <>
              <Notification message="No feedback given"></Notification>
              <Section title="Statistics"></Section>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage.toFixed(1)}
              />
            </>
            )
            :
            (
              <Notification
              title="No feedback given"
              message="No feedback given"
/>
              )}
</>
      </section>
    )
  }





