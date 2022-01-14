import React from 'react';
import Grid from '../../../../components/Grid';
import CardImage from '../CardImage';
import Modal from '../Modal';
import './list-images.scss';

const ListImage = ({ data }) => {
  return (
    <div className="list-image">
      <Modal />
      <Grid col={4} smCol={2} gap={30}>
        {data.map((item) => (
          <CardImage key={item.id} imageItem={item} />
        ))}
      </Grid>
    </div>
  );
};

export default ListImage;
