import React from 'react';


const Topic = ({ match }) => (
  <div>
    <h3>Topic Match: {match.params.topicId}</h3>
  </div>
);

export default Topic;
