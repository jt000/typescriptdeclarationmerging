import {MyOptions} from './MyOptions';

declare global {
    interface JQuery {
        DoesntWork(): void;
    }
}