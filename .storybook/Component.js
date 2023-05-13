import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@storybook/theming';

export const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  background: linear-gradient(0deg, rgba(48, 47, 91, 1) 0%, rgba(90, 90, 157, 1) 100%);
  color: #d7ccf1;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  width: 200px;
  margin: 30px;

  :hover {
    background: linear-gradient(0deg, rgba(90, 90, 157, 1) 0%, rgba(61, 61, 117, 1) 100%);
  }

  :focus {
    outline-color: rgba(48, 47, 91, 0.37);
    outline-offset: 1px;
    outline-width: 3px;
    outline-style: double;
  }
`;

export class Badge extends React.Component {
  constructor(props) {
    super(props);
    console.log('Badge constructor');
  }
  render() {
    console.log('Badge render');
    return <Button>{this.props.info}</Button>;
  }
}
Badge.propTypes = {
  info: PropTypes.number.isRequired,
};
