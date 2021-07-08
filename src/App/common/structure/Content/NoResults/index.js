import { NoResultsPicture, Wrapper, StyledSubheader } from './styled';

const NoResults = ({ search, text }) => (
  <>
    <StyledSubheader search={search}>
      Sorry, there are no results for "{text}"
    </StyledSubheader>
    <Wrapper search={search}>
      <NoResultsPicture />
    </Wrapper>
  </>
);

export default NoResults;
