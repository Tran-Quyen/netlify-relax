import React, { useEffect, useState } from 'react';
import albumData from '../../../../assets/fake-data/albumData/albumData';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import ListImage from '../../component/ListImage';

const CarModel = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    setCar(albumData.filter((album) => album.type === 'car') || []);
  }, []);

  return (
    <div className="car">
      <Title title="Car" />
      <Section>
        <ListImage data={car} />
      </Section>
    </div>
  );
};

export default CarModel;
