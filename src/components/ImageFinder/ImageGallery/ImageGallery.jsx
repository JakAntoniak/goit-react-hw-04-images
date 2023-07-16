import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

import css from './Style.module.css';

class ImageGallery extends Component {
  state = {
    galleryItems: [],
  };

  render() {
    return (
      <ul
        className={css['image-gallery']}
        onClick={this.props.handleImageClick}
      >
        {this.props.galleryItems.map(item => {
          return (
            <ImageGalleryItem
              id={item.id}
              key={item.id}
              src={item.webformatURL}
            />
          );
        })}
      </ul>
    );
  }
}
export default ImageGallery;
