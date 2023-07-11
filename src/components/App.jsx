import { Searchbar } from './ImageFinder/Searchbar/Searchbar';
import ImageGallery from './ImageFinder/ImageGallery/ImageGallery';
import Button from './ImageFinder/Button/LoadMoreButton';
import { Loader } from './ImageFinder/Loader/Loader';
import { useState } from 'react';
import Modal from './ImageFinder/Modal/Modal';

const KEY = '33185043-dc389dc3b605958bff2737f65';

export const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [pages, setPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLargeImage, setModalLargeImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  const fetchPictures = async URL => {
    const query = await fetch(URL);
    const queryJSON = await query.json();
    await setTotalHits(queryJSON.totalHits);
    return queryJSON.hits;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);

    const inputEl = document.querySelector('#input');
    const input = inputEl.value;
    const page = 1;
    const URL = `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const pictures = await fetchPictures(URL);

    setGalleryItems(pictures);
    setInputValue(input);
    setPages(page);
    setIsLoading(false);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);

    const prevGalleryItems = galleryItems;
    const input = inputValue;
    const page = pages + 1;
    const URL = `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const newPictures = await fetchPictures(URL);

    setGalleryItems([...prevGalleryItems, ...newPictures]);
    setInputValue(input);
    setPages(page);
    setIsLoading(false);
  };

  const handleImageClick = e => {
    const id = e.target.id;

    const pictureObject = galleryItems.find(
      element => element.id === Number(id)
    );

    setIsModalOpen(true);
    setModalLargeImage(pictureObject.largeImageURL);
    setModalAlt(pictureObject.tags);
  };

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleEscClose = e => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {isModalOpen && (
        <Modal
          src={modalLargeImage}
          alt={modalAlt}
          handleClose={handleClose}
          handleEscClose={handleEscClose}
        />
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery
        galleryItems={galleryItems}
        handleImageClick={handleImageClick}
      />
      {galleryItems.length > 0 && galleryItems.length !== totalHits ? (
        <Button handleLoadMore={handleLoadMore} />
      ) : null}
    </div>
  );
};
