import { fromEvent } from 'rxjs';
import './style.css';

fromEvent(document, 'click')
  .subscribe(() => {
    console.log('CLick')
  });