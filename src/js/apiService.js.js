const START_PAGE = 1;
const PER_PAGE = 12;
const ORIENTATION = 'horizontal';
const PIXABAY_API_KEY = '22367618-7fb2d68f51aac1758c60e4fb0';

const getImages = async (
  keyword,
  pageNum = START_PAGE,
  perPage = PER_PAGE,
  orientation = ORIENTATION,
) => {
  // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
  const URL = `https://pixabay.com/api/?image_type=photo&orientation=${orientation}&q=${keyword}&page=${pageNum}&per_page=${perPage}&key=${PIXABAY_API_KEY}`;
  const response = await fetch(URL);

  return response.json();
};

export { getImages, START_PAGE, PER_PAGE };
