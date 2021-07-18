import Failure from '../common/structure/Content/Failure';
import Loading from '../common/structure/Content/Loading';

const RenderCondition = (status, render, search) => {
  switch (status) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading search={search} />;

    case 'error':
      return <Failure search={search} />;

    case 'success':
      return render;

    default:
      throw new Error(`incorrect status - ${status}`);
  }
};

export default RenderCondition;
