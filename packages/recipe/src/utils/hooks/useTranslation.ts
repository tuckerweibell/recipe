type Translation = {
  t: (key: string, options?: any) => string;
};

const useTranslation = (translations): Translation => {
  return {
    t: (key, options = {}) =>
      Object.entries(options).reduce(
        (s, [propName, propValue]) => s.replace(`{{${propName}}}`, propValue),
        translations[key]
      ),
  };
};

export default useTranslation;
