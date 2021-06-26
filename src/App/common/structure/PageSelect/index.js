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

const PageSelect = ({ minNumberPage, maxNumberPage }) => (
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
      <PageNumber>{minNumberPage}</PageNumber>
      <PageText>of</PageText>
      <PageNumber>{maxNumberPage}</PageNumber>
    </Wrapper>
    <PageButton title={'Next page'}>
      <PageButtonText>Next</PageButtonText>
      <ArrowheadIcon rotated={'true'} />
    </PageButton>
    <PageButton title={'Last page'}>
      <PageButtonText>Last</PageButtonText>
      <ArrowheadsWrapper>
        <ArrowheadIcon rotated={'true'} />
        <ArrowheadIcon rotated={'true'} />
      </ArrowheadsWrapper>
    </PageButton>
  </StyledPageSelect>
);

export default PageSelect;
