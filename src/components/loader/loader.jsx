import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={3}
    width={270}
    height={300}
    viewBox="0 0 270 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}>
    <rect x="510" y="232" rx="3" ry="3" width="88" height="6" />
    <rect x="112" y="-11" rx="0" ry="0" width="107" height="0" />
    <rect x="546" y="360" rx="0" ry="0" width="70" height="30" />
    <rect x="551" y="356" rx="0" ry="0" width="70" height="26" />
    <rect x="468" y="199" rx="8" ry="8" width="100" height="34" />
    <rect x="0" y="0" rx="20" ry="20" width="280" height="205" />
  </ContentLoader>
);

export default Loader;
