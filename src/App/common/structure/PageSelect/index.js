import { useSelector } from 'react-redux';
import { selectTotalPages } from '../../../features/listSlice';
import { usePageParameters } from '../../../features/usePageParameters';
import { useReplacePageParameters } from '../../../features/useReplacePageParameters';
import { pageKey } from '../../../paramKeys';
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

const PageSelect = () => {
  const totalPages = useSelector(selectTotalPages);
  const page = +usePageParameters();
  const replacePageParameters = useReplacePageParameters();

  const onButtonClick = page => {
    replacePageParameters({ key: pageKey, value: page });
  };

  return (
    <StyledPageSelect>
      <PageButton
        disabled={page === 1}
        onClick={() => onButtonClick(1)}
        title={'First page'}
      >
        <ArrowheadsWrapper>
          <ArrowheadIcon />
          <ArrowheadIcon />
        </ArrowheadsWrapper>
        <PageButtonText>First</PageButtonText>
      </PageButton>
      <PageButton
        disabled={page === 1}
        onClick={() => onButtonClick(page - 1)}
        title={'Previous page'}
      >
        <ArrowheadIcon />
        <PageButtonText>Previous</PageButtonText>
      </PageButton>
      <Wrapper>
        <PageText>Page</PageText>
        <PageNumber>{page}</PageNumber>
        <PageText>of</PageText>
        <PageNumber>{totalPages}</PageNumber>
      </Wrapper>
      <PageButton
        disabled={page === totalPages}
        onClick={() => onButtonClick(page + 1)}
        title={'Next page'}
      >
        <PageButtonText>Next</PageButtonText>
        <ArrowheadIcon rotated={'true'} />
      </PageButton>
      <PageButton
        disabled={page === totalPages}
        onClick={() => onButtonClick(totalPages)}
        title={'Last page'}
      >
        <PageButtonText>Last</PageButtonText>
        <ArrowheadsWrapper>
          <ArrowheadIcon rotated={'true'} />
          <ArrowheadIcon rotated={'true'} />
        </ArrowheadsWrapper>
      </PageButton>
    </StyledPageSelect>
  );
};

export default PageSelect;
