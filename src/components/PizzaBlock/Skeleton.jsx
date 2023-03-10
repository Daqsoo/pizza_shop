import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="120" cy="120" r="120" />
    <rect x="0" y="267" rx="10" ry="10" width="280" height="32" />
    <rect x="0" y="320" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="431" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="424" rx="32" ry="32" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
