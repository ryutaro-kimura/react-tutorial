export const LANGUAGES = [ // 追加
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 3000);
  });
};