import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const DESCRIPTIONS = [
  'Закат на море',
  'Утренний кофе',
  'Прогулка по городу',
  'Мой рабочий стол',
  'Вкусный ужин',
  'Осенний парк',
  'Путешествие продолжается'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Елена',
  'Максим',
  'София',
  'Дмитрий',
  'Ольга'
];

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
  };
};

const getSimilarPhotos = () => Array.from({ length: 25 }, createPhotoDescription);

export { getSimilarPhotos };
