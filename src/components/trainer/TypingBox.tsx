import { useState } from 'react';

const TypingBox = () => {
  const [text, setText] = useState(
    "It's very tricky, if not impossible, the literature would have us believe that a confident crocodile is not but a fly. As far as he is concerned, the literature would have us believe that a discreet dog is not but an octopus? They were lost without the decisive fish that composed their dog. If this was somewhat unclear, the first cheerful cherry is, in its own way, an apple. Of course, the literature would have us believe that a compassionate fox is not but a chicken? Unfortunately, that is wrong; on the contrary, the literature would have us believe that a convivial kitten is not but a duck. Some assert that dogs are powerful crocodiles. Their fox was, in this moment, an adaptable deer. The literature would have us believe that a peaceful deer is not but a puppy. One cannot separate elephants from dynamic pigs?"
  );

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] h-[300px] m-auto overflow-hidden '>
        type box
        <div className='text-3xl flex flex-wrap '>
          {text.split(' ').map((word) => (
            <span className='mr-1 pr-1'>
              {word.split('').map((char) => (
                <span>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypingBox;
