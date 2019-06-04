import React, { Fragment } from 'react';

import useDataApi from './Fetch';
import DuplicateCards from './DuplicateCards';

function Draw(props) {
  const draw = useDataApi(props.url);

  return (
    <Fragment>
      {draw.isError && <div>Something went wrong ...</div>}

      {draw.isLoading ? (
        <div>Loading deck...</div>
      ) : (
        <DuplicateCards cards={draw.data.cards} />
      )}
    </Fragment>
  );
}

export default Draw;
