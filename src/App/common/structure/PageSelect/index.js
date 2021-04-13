import {
  ArrowheadIcon,
  PageButton,
  PageButtonText,
  PageNumber,
  PageText,
  StyledPageSelect,
  Wrapper,
} from './styled';

const PageSelect = ({ fromNumber, toNumber }) => (
  <StyledPageSelect>
    <PageButton disabled>
      <ArrowheadIcon />
      <PageButtonText>First</PageButtonText>
    </PageButton>
    <PageButton disabled>
      <ArrowheadIcon />
      <PageButtonText>Previous</PageButtonText>
    </PageButton>
    <Wrapper>
      <PageText>Page</PageText>
      <PageNumber>{fromNumber}</PageNumber>
      <PageText>of</PageText>
      <PageNumber>{toNumber}</PageNumber>
    </Wrapper>
    <PageButton>
      <PageButtonText>Next</PageButtonText>
      <ArrowheadIcon rotated />
    </PageButton>
    <PageButton>
      <PageButtonText>Last</PageButtonText>
      <ArrowheadIcon rotated />
    </PageButton>
  </StyledPageSelect>
);

export default PageSelect;
