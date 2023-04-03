import PropTypes from 'prop-types';
import { Button } from 'components/Statistics/Statistics.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="Button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
          key={option}
          name={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
