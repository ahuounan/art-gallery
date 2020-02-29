import React from 'react';

import './styles.css';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const InputSubmit = React.memo((props: Props) => {
  return (
    <div>
      <input {...props} type="submit" className="input-submit__input" />
    </div>
  )
})