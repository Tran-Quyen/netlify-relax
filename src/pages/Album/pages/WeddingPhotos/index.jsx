import React, { useEffect, useState } from 'react';
import albumData from '../../../../assets/fake-data/albumData/albumData';
import Title from '../../../../components/Title';
import ListImage from '../../component/ListImage';
import Section from '../../../../components/Section';

const WeddingPhotos = () => {
  const [weddingData, setWeddingData] = useState([]);

  useEffect(() => {
    setWeddingData(albumData.filter((album) => album.type === 'wedding') || []);
  }, []);

  return (
    <div className="wedding">
      <Title title="Wedding Photos" />
      <Section>
        <ListImage data={weddingData} />
      </Section>
    </div>
  );
};

export default WeddingPhotos;
