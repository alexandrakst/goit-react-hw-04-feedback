import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions';

export default function FeedbackForm() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback()) * 100;
    if (percentage > 0) return +percentage.toFixed();
    else return 0;
  };

  const handleClick = options => {
    switch (options) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Section title={'Please leave feedback'}></Section>
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={handleClick}
      />
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const options = Object.values(this.state);
//     return options.reduce((acc, option) => acc + option, 0);
//   };

// countPositiveFeedbackPercentage = () => {
//   const percentage = (this.state.good / this.countTotalFeedback()) * 100;
//   if (percentage > 0) return +percentage.toFixed();
//   else return 0;
// };

//   handleClick = e => {
//     const { name } = e.target;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//       return (
//         <>
//         <Section title={'Please leave feedback'}>
//           </Section>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//               />
//           <Section title={'Statistics'}>
//             {this.countTotalFeedback() === 0 ? (
//               <Notification message={'There is no feedback'}></Notification>
//             ) : (
//               <Statistics
//                 good={ good }
//                 neutral={ neutral }
//                 bad={ bad }
//                 total={ this.countTotalFeedback() }
//                 positivePercentage={ this.countPositiveFeedbackPercentage() }
//               />
//             )}
//           </Section>
//     </>
//     );
//   }
// }

//export default App;
