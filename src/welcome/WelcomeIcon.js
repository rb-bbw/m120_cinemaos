import {Figure, Image} from 'react-bootstrap';

export default function WelcomeIcon({src, text}) {
  return (
    <Figure className="d-block">
      <Image className="mx-auto d-block rounded" src={src}/>
      <Figure.Caption className="text-center">{text}</Figure.Caption>
    </Figure>
  );
}
