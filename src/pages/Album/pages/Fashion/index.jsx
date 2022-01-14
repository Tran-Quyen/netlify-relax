import React, { useEffect, useState } from 'react';
import albumData from '../../../../assets/fake-data/albumData/albumData';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import ListImage from '../../component/ListImage';

const Fashion = () => {
  const [fashion, setFashion] = useState([]);

  useEffect(() => {
    setFashion(albumData.filter((album) => album.type === 'fashion') || []);
  }, []);

  return (
    <div className="fashion">
      <Title title="Fashion" />
      <Section>
        <ListImage data={fashion} />
      </Section>
    </div>
  );
};

export default Fashion;
