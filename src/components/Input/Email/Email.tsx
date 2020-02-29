import React from 'react';
import { Text } from 'components/Text';

import './styles.css';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  prompt: string;
}

export const InputEmail = React.memo((props: Props) => {
  const { prompt, ...inputProps } = props;
  
  return (
    <div>
      <div>  
        <Text.Menu text={prompt} />
      </div>
      <input {...inputProps} type="text" className="input-text__input" />
    </div>
  )
})
