import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Helmet = (props) => {
  useEffect(() => {
    document.title = 'Relax - ' + props.title;
  }, [props.title]);

  return <div>{props.children}</div>;
};

Helmet.defaultProps = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
