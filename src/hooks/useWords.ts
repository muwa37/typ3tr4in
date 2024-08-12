import { selectText } from '@/store/text/selectors';
import { setText } from '@/store/text/slice';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useWords = () => {
  const dispatch = useDispatch();
  const generatedText = useSelector(selectText);

  const [words, setWords] = useState<string>(generatedText.text);

  const updateWords = useCallback(() => {
    dispatch(setText());
    setWords(generatedText.text);
  }, [words.split(' ').length, generatedText.text]);

  return { words, updateWords };
};

export default useWords;
