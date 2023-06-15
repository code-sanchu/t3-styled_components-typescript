import tw, { styled } from "twin.macro";
import { Logo } from "~/components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const MyBox = tw.div`border`;
const MyStyledComp = styled.div(() => [tw`text-blue-800`]);

const MyPage = () => {
  return (
    <div>
      <Title>Hello</Title>
      <div tw="text-red-500 pl-2 mt-4">Okay</div>
      <MyBox>A box</MyBox>
      <MyStyledComp>A styled component</MyStyledComp>
      <Logo />
    </div>
  );
};
export default MyPage;
