import { StyledLoading, Loader } from './styled';

const Loading = ({ search }) => (
  <StyledLoading search={search}>
    <Loader search={search} />
  </StyledLoading>
);

export default Loading;
