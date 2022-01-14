import React, { useEffect, useState } from 'react';
import albumData from '../../../../assets/fake-data/albumData/albumData';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import ListImage from '../../component/ListImage';

const PhotoPose = () => {
  const [poseData, setPoseData] = useState([]);

  useEffect(() => {
    setPoseData(albumData.filter((album) => album.type === 'pose') || []);
  }, []);
  return (
    <div className="pose">
      <Title title="pose" />
      <Section>
        <ListImage data={poseData} />
      </Section>
    </div>
  );
};

export default PhotoPose;
