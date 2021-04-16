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
    <PageButton disabled title={'First page'}>
      <ArrowheadsWrapper>
        <ArrowheadIcon />
        <ArrowheadIcon />
      </ArrowheadsWrapper>
      <PageButtonText>First</PageButtonText>
    </PageButton>
    <PageButton disabled title={'Previous page'}>
      <ArrowheadIcon />
      <PageButtonText>Previous</PageButtonText>
    </PageButton>
    <Wrapper>
      <PageText>Page</PageText>
      <PageNumber>{minNumber}</PageNumber>
      <PageText>of</PageText>
      <PageNumber>{maxNumber}</PageNumber>
    </Wrapper>
    <PageButton title={'Next page'}>
      <PageButtonText>Next</PageButtonText>
      <ArrowheadIcon rotated />
    </PageButton>
    <PageButton title={'Last page'}>
      <PageButtonText>Last</PageButtonText>
      <ArrowheadsWrapper>
        <ArrowheadIcon rotated />
        <ArrowheadIcon rotated />
      </ArrowheadsWrapper>
    </PageButton>
  </StyledPageSelect>
);

export default PageSelect;
