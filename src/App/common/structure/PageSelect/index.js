import {
  ArrowheadIcon,
  PageButton,
  PageNumber,
  PageText,
  StyledPageSelect,
  Wrapper,
} from './styled';

const PageSelect = ({ fromNumber, toNumber }) => (
  <StyledPageSelect>
    <PageButton disabled>
      <ArrowheadIcon />
      First
    </PageButton>
    <PageButton disabled>
      <ArrowheadIcon />
      Previous
    </PageButton>
    <Wrapper>
      <PageText>Page</PageText>
      <PageNumber>{fromNumber}</PageNumber>
      <PageText>of</PageText>
      <PageNumber>{toNumber}</PageNumber>
    </Wrapper>
    <PageButton>
      Next
      <ArrowheadIcon rotated />
    </PageButton>
    <PageButton>
      Last
      <ArrowheadIcon rotated />
    </PageButton>
  </StyledPageSelect>
);

export default PageSelect;
