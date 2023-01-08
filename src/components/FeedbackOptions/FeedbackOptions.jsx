import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <Btn type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </Btn>
    <Btn type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </Btn>
    <Btn type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </Btn>
  </>
);

// export const FeedbackOptions = ({ onLeaveFeedback }) => (
//   <div>
//     <button
//       type="button"
//       name="good"
//       onClick={onLeaveFeedback}
//       className={css.btn}
//     >
//       Good
//     </button>
//     <button
//       type="button"
//       name="neutral"
//       onClick={onLeaveFeedback}
//       className={css.btn}
//     >
//       Neutral
//     </button>
//     <button
//       type="button"
//       name="bad"
//       onClick={onLeaveFeedback}
//       className={css.btn}
//     >
//       Bad
//     </button>
//   </div>
// );

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
