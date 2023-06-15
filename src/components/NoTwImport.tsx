import "twin.macro";

const MyBox = tw.div`border`;

const NoTwImport = () => {
  return <MyBox>Hello</MyBox>;
};

export default NoTwImport;
