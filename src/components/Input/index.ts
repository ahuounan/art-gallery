import { InputText } from './Text';
import { InputParagraph } from './Paragraph';
import { InputEmail } from './Email';
import { InputSubmit } from './Submit';

export const Input = {
  Text: InputText,
  Paragraph: InputParagraph,
  Email: InputEmail,
  Submit: InputSubmit
};

export type InputType = keyof typeof Input;
