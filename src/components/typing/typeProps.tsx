import { character } from './character';
import { firstPage } from './firstPage';
import { lastPage } from './lastPage';
import { prevPage } from './prevPage';
import { nextPage } from './nextPage';
import { prev } from './prev';
import { next } from './next';

export type typeProps = {
    characters: Array<character>,
    firstPage: firstPage,
    lastPage: lastPage,
    prevPage: prevPage,
    nextPage: nextPage,
    prev: prev,
    next: next,
}