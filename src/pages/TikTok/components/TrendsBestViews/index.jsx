import React, { useState } from 'react';
import Title from '../../../../components/Title';
import TikTokList from '../TikTokList';
import tiktokList from '../../../../assets/fake-data/tiktokList';

const TrendsBestViews = () => {
  const [bestTrendList] = useState(() => {
    const tmpList = [...tiktokList];
    tmpList.sort((a, b) => b.info.heart - a.info.heart);
    return tmpList.slice(0, 5);
  });
  return (
    <div className="trends-best-views">
      <div className="container">
        <Title title="Top 5 Trends Best View" />
        <TikTokList tiktokList={bestTrendList} />
      </div>
    </div>
  );
};

export default TrendsBestViews;
