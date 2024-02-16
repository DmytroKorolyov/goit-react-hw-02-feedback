import React, { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import SectionTitle from '../SectionTitle/SectionTitle'
import { countTotalFeedback, countPositiveFeedbackPercentage } from '../StatisticsCounter/StatisticsCounter'
import Notification from '../Notification/Notification'

export default class Feadback extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };



    render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);
        return (
            <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </SectionTitle>
        {total > 0 ? (
          <SectionTitle title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </SectionTitle>
        ) : (
          <Notification message="There is no feedback" />
        )}
            </div>
        )
    }
    
}