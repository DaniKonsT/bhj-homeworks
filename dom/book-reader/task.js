const arrOfFontSizes = Array.from(document.querySelectorAll('.font-size'));
let activeFontSize = document.querySelector('.font-size_active');

const book = document.querySelector('.book');

arrOfFontSizes.forEach(clickItem => {
  clickItem.addEventListener('click', function(event) {
    event.preventDefault();
    activeFontSize.classList.remove('font-size_active');
    activeFontSize = clickItem;
    activeFontSize.classList.add('font-size_active');
    
    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = event.target.dataset.size;

    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
    });
});