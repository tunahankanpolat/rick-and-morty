import React from 'react';
import PropTypes from 'prop-types';

const Showcase = ({children}) => {
  return (
    <section className="flex-center px-0 py-[72px] bg-[#272b33] min-h-[calc(50vh-60px)] phone:p-6">
      <div className="flex-center flex-wrap max-w-[1920px]">
      {children}
      </div>
    </section>
  );
};

Showcase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Showcase;
