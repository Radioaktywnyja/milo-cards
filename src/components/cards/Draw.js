import React, { Fragment } from 'react';

import useDataApi from './Fetch';
import DealCards from './DealCards';

function Draw(props) {
  const draw = useDataApi(props.url);

  return (
    <Fragment>
      {draw.isError && <div>Something went wrong ...</div>}

      {draw.isLoading ? (
        <div>Drawing cards...</div>
      ) : (
        <DealCards cards={draw.data.cards} />
      )}
    </Fragment>
  );
}

export default Draw;
