import React from 'react';
import { Dna } from  'react-loader-spinner';

const Loader = () => {
    return  (
      <div style={{
        width:"100%",
        height:"1000px",
        display:"flex",
        justifyContent:"center",
        paddingTop:"20px"
      }}>
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
       />
      </div>
    )
};

export default Loader;