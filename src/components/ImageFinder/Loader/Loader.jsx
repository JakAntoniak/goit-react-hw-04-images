import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import css from './Style.module.css';

export const Loader = ({ isLoading }) => {
  return (
    <div className={css['loader-wrapper']}>
      <Oval
        className={css.loader}
        height={80}
        width={80}
        color="black"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
        ariaLabel="oval-loading"
        secondaryColor="grey"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};
