import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_COLOURS = {
  tick: '#FFFFFF',
  completed: '#54B159',
  current: '#3B3F61',
  uncompleted: '#D1D6DB',
};

const StepCircle = ({
  colour, translateX, translateY, radius, stepNumber,
}) => (
  <circle
    id={`Oval-${stepNumber}`}
    fill={colour}
    cx={`${translateX}`}
    cy={`${translateY}`}
    r={`${radius}`}
  />
);

const Tick = ({
  colour = DEFAULT_COLOURS.tick,
  translateX: x = 7,
  translateY: y = 7,
  stepNumber,
}) => (
  <path
    d={`M${x + 2.85733336},${y - 2.56309873}
        L${x + 2.31847361},${y - 2.94231455}
        C${x + 2.16987934},${y - 3.04609442} ${x + 1.96640003},${y - 3.00599765} ${x + 1.8661147},${y - 2.85294856}
        L${x - 0.77165497},${y + 1.17782473}
        L${x - 1.98418425},${y - 0.07840958}
        C${x - 2.11090039},${y - 0.20905165} ${x - 2.31728835},${y - 0.20905165} ${x - 2.44438388},${y - 0.07840958}
        L${x - 2.90458351},${y + 0.39934471}
        C${x - 3.0318055},${y + 0.53090403} ${x - 3.0318055},${y + 0.74462241} ${x - 2.90458351},${y + 0.87644381}
        L${x - 1.04064222},${y + 2.80868863}
        C${x - 0.93593068},${y + 2.91666162} ${x - 0.77203436},${y + 3} ${x - 0.62432533},${y + 3}
        C${x - 0.4766163},${y + 3} ${x - 0.3277691},${y + 2.9035581} ${x - 0.23190998},${y + 2.75928837}
        L${x + 2.94408712},${y - 2.09491002}
        C${x + 3.0446254},${y - 2.24795911} ${x + 3.0059276},${y - 2.45853266} ${x + 2.85733336},${y - 2.56309873}`}
    id={`tick-${stepNumber}`}
    fill={colour}
  />
);

const CurrentStep = ({
  translateX, translateY, stepNumber, colour = DEFAULT_COLOURS.current,
}) => (
  <StepCircle
    translateX={translateX}
    translateY={translateY}
    stepNumber={stepNumber}
    colour={colour}
    radius={7}
  />
);

const CompletedStep = ({
  translateX, translateY, stepNumber, colour = DEFAULT_COLOURS.completed, tickColour,
}) => (
  <g id={`completed-${stepNumber}`}>
    <StepCircle
      translateX={translateX}
      translateY={translateY}
      stepNumber={stepNumber}
      colour={colour}
      radius={7}
    />
    <Tick colour={tickColour} translateX={translateX} translateY={translateY} stepNumber={stepNumber} />
  </g>
);

const UncompletedStep = ({
  colour = DEFAULT_COLOURS.uncompleted, translateX, translateY, stepNumber,
}) => (
  <StepCircle
    translateX={translateX}
    translateY={translateY}
    stepNumber={stepNumber}
    colour={colour}
    radius={4}
  />
);

const FormProgress = ({
  currentStepNumber,
  totalStepNumber,
  gapBetweenSteps = 35,
  height = 14,
}) => {
  const distance = gapBetweenSteps + height;
  const width = ((totalStepNumber - 1) * distance) + height;

  const steps = [];
  for (let i = 0; i < totalStepNumber; i += 1) {
    if (i < (currentStepNumber - 1)) {
      steps.push(CompletedStep);
    } else if (i === (currentStepNumber - 1)) {
      steps.push(CurrentStep);
    } else {
      steps.push(UncompletedStep);
    }
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <title>{`Progress bar - Step ${currentStepNumber}/${totalStepNumber}`}</title>
      <desc>{`Step ${currentStepNumber}/${totalStepNumber}`}</desc>

      <g id='progress-bar' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id={`progress-bar---step-${currentStepNumber}`}>
          <path
            id='progress-line'
            d={`M${height / 2},${height / 2} L${width - (height / 2)},${height / 2}`}
            stroke={DEFAULT_COLOURS.uncompleted}
            strokeLinecap='square'
          />
          {steps.map((Step, index) => (
            <Step
              key={`step-circle-${index + 1}`}
              translateY={height / 2}
              translateX={(index * distance) + (height / 2)}
              stepNumber={index + 1}
            />
          ))}
        </g>
      </g>
    </svg>
  );
};

StepCircle.propTypes = {
  colour: PropTypes.string,
  radius: PropTypes.number.isRequired,
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
};

Tick.propTypes = {
  colour: PropTypes.string,
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
};

CurrentStep.propTypes = {
  colour: PropTypes.string,
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
};

CompletedStep.propTypes = {
  colour: PropTypes.string,
  tickColour: PropTypes.string,
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
};

UncompletedStep.propTypes = {
  colour: PropTypes.string,
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
};

FormProgress.propTypes = {
  currentStepNumber: PropTypes.number.isRequired,
  totalStepNumber: PropTypes.number.isRequired,
  gapBetweenSteps: PropTypes.number,
  height: PropTypes.number,
};

export default FormProgress;
