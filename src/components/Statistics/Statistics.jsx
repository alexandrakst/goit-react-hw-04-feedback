import React from "react";
import { StatDiv } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad , total, positivePercentage}) => {
    return (
        <StatDiv>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
            <p>Total: { total }</p>
            <p>Positive feedback: { positivePercentage } %</p>
        </StatDiv> )
}
