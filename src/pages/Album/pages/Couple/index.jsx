import React, { useEffect, useState } from 'react';
import albumData from '../../../../assets/fake-data/albumData/albumData';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import ListImage from '../../component/ListImage';

const Couple = () => {
  const [coupleData, setCoupleData] = useState([]);

  useEffect(() => {
    setCoupleData(albumData.filter((album) => album.type === 'couple') || []);
  }, []);

  return (
    <div className="couple">
      <Title title="Couple" />
      <Section>
        <ListImage data={coupleData} />
      </Section>
    </div>
  );
};

export default Couple;
