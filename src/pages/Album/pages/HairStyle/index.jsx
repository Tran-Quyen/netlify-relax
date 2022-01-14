import React, { useEffect, useState } from 'react';
import albumData from '../../../../assets/fake-data/albumData/albumData';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import ListImage from '../../component/ListImage';

const HairStyle = () => {
  const [hairStyleData, setHairStyleData] = useState([]);

  useEffect(() => {
    setHairStyleData(
      albumData.filter((album) => album.type === 'hair-style') || []
    );
  }, []);

  return (
    <div className="hair-style">
      <Title title="Hair Style" />
      <Section>
        <ListImage data={hairStyleData} />
      </Section>
    </div>
  );
};

export default HairStyle;
