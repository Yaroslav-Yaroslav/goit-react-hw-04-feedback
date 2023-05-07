import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button type="button" name={option} onClick={onLeaveFeedback} key={option}>
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
