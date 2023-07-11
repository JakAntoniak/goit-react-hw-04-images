// import { Component } from 'react';
// import css from './Style.module.css';
// import PropTypes from 'prop-types';

// export const Modal = (src, alt, handleClose) => {
//   return (
//     <div className={css.overlay} onClick={handleClose}>
//       <div className={css.modal}>
//         <img src={src.src} alt={alt.alt} />
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   handleLoadMore: PropTypes.func,
//   src: PropTypes.string,
//   alt: PropTypes.string,
// };

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

import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Style.module.css';

class Modal extends Component {
  static propTypes = {
    handleEscClose: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.props.handleEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleEscClose);
  }

  render() {
    return (
      <div className={css.overlay} onClick={this.props.handleClose}>
        <div className={css.modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
