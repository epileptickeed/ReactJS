import React from 'react'
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={350}
    height={577}
    viewBox="0 0 350 577"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="165" cy="177" r="165" /> 
    <rect x="0" y="351" rx="10" ry="10" width="334" height="34" /> 
    <rect x="0" y="400" rx="10" ry="10" width="334" height="100" /> 
    <rect x="0" y="520" rx="10" ry="10" width="96" height="34" /> 
    <rect x="203" y="517" rx="15" ry="15" width="129" height="50" />
  </ContentLoader>
    );
}

export default Skeleton