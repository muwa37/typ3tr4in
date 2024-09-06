import { selectText } from '@/store/text/selectors';
import { setText } from '@/store/text/slice';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useWords = () => {
  const dispatch = useDispatch();
  const generatedText = useSelector(selectText);

  const [words, setWords] = useState<string>(generatedText.text);

  useEffect(() => {
    setWords(generatedText.text);
  }, [generatedText.text]);

  const updateWords = useCallback(() => {
    dispatch(setText());
  }, [dispatch]);

  return { words, updateWords };
};

export default useWords;
