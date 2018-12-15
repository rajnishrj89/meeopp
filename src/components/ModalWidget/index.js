import React from 'react';
import PropTypes from 'prop-types';

const ModalWidget = ({
  title, value, className, border,
}) => (
  <div className={`col s6 margin-btm ${border && 'border-right'}`}>
    <div className="SiteStatus">
      <h3 className={className}>{value}</h3>
      <p>{title}</p>
    </div>
  </div>
);

ModalWidget.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  border: PropTypes.bool,
};

ModalWidget.defaultProps = {
  border: true,
};

export default ModalWidget;
