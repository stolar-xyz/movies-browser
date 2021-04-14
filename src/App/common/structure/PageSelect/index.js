import {
  ArrowheadIcon,
  PageButton,
  PageButtonText,
  PageNumber,
  PageText,
  StyledPageSelect,
  Wrapper,
} from './styled';

const PageSelect = ({ minNumber, maxNumber }) => (
  <StyledPageSelect>
    <PageButton disabled>
      <ArrowheadIcon />
      <ArrowheadIcon />
      <PageButtonText>First</PageButtonText>
    </PageButton>
    <PageButton disabled>
      <ArrowheadIcon />
      <PageButtonText>Previous</PageButtonText>
    </PageButton>
    <Wrapper>
      <PageText>Page</PageText>
      <PageNumber>{minNumber}</PageNumber>
      <PageText>of</PageText>
      <PageNumber>{maxNumber}</PageNumber>
    </Wrapper>
    <PageButton>
      <PageButtonText>Next</PageButtonText>
      <ArrowheadIcon rotated />
    </PageButton>
    <PageButton>
      <PageButtonText>Last</PageButtonText>
      <ArrowheadIcon rotated />
      <ArrowheadIcon rotated />
    </PageButton>
  </StyledPageSelect>
);

export default PageSelect;
