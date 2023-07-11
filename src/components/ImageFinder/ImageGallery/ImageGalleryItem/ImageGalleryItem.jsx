// import PropTypes from 'prop-types';
import css from './Style.module.css';

export const ImageGalleryItem = ({ id, src }) => {
  return (
    <li className={css['gallery-item']}>
      <img
        className={css['gallery-item__image']}
        src={src}
        id={id}
        alt="Tu jest zdjęcie"
      />
    </li>
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

// const ImageGalleryItem = ({ src, alt, id }) => {
//   return (
//     <li className={css['gallery-item']}>
//       <img
//         className={css['gallery-item__image']}
//         src={src}
//         alt={alt}
//         id={id}
//       ></img>
//     </li>
//   );
// };

// ImageGalleryItem.propTypes = {
//   src: PropTypes.string,
//   alt: PropTypes.string,
//   id: PropTypes.number,
// };

// export default ImageGalleryItem;
