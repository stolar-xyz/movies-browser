import {
  ArrowheadIcon,
  ArrowheadsWrapper,
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
      <ArrowheadsWrapper>
        <ArrowheadIcon />
        <ArrowheadIcon />
      </ArrowheadsWrapper>
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
      <ArrowheadsWrapper>
        <ArrowheadIcon rotated />
        <ArrowheadIcon rotated />
      </ArrowheadsWrapper>
    </PageButton>
  </StyledPageSelect>
);

export default PageSelect;
