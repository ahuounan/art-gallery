import React from 'react';
import { Text } from 'components/Text';

import './styles.css';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  prompt: string;
}

export const InputParagraph = React.memo((props: Props) => {
  const { prompt, ...inputProps } = props;
  return (
    <div>
      <div>  
        <Text.Menu text={prompt} />
      </div>
      <input {...inputProps} className="input-text__input" />
    </div>
  )
})