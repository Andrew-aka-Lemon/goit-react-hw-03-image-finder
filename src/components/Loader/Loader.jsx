import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Dna
      visible={true}
      height="180"
      width="180"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export default Loader;
