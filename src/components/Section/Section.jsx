import PropTypes from 'prop-types';
import { Portion, Title } from './Section.styled';
export const Section = ({ title, children }) => (
  <Portion>
    <Title>{title}</Title>
    {children}
  </Portion>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
