import { useState } from "react";

const Button = ({onClick,text}) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text,value}) =>{
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ rate }) => {
  const total = rate.good + rate.bad + rate.neutral;

  if (total === 0) {
    return <p>No feedback given</p>
  }

  let average = (rate.good * 1 + rate.neutral * 0 + rate.bad * -1) / total || 0;

  let positive = (rate.good / total) * 100 || 0;

  return (
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticLine text="good" value={rate.good} />
      <StatisticLine text="neutral" value={rate.neutral} />
      <StatisticLine text="bad" value={rate.bad} />
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive + " %"}/>
      </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [rate, setRate] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (key) => {
    const updatedRate = { ...rate, [key]: rate[key] + 1 }
    setRate(updatedRate)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => updateFeedback('good')} text = "good"/>
      <Button onClick={() => updateFeedback('neutral')} text = "neutral"/>
      <Button onClick={() => updateFeedback('bad')} text = "bad"/>

      <Statistics rate={rate} />
    </div>
  );
};

export default App;
