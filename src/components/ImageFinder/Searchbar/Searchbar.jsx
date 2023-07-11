// import PropTypes from 'prop-types';
import css from './Style.module.css';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form className={css['search-form']}>
        <button
          onClick={handleSubmit}
          type="submit"
          className={css['search-form__button']}
        >
          Search
        </button>

        <input
          id="input"
          className={css['search-form__input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const Searchbar = ({ handleSubmit }) => {
//   return (
//     <header className={css.searchbar}>
//       <form className={css['search-form']} onSubmit={handleSubmit}>
//         <button type="submit" className={css['search-form__button']}>
//           Search
//         </button>

//         <input
//           className={css['search-form__input']}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;

// Searchbar.propTypes = {
//   handleSubmit: PropTypes.func,
// };
