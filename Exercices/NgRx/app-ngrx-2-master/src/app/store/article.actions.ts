import { createAction, props } from '@ngrx/store';
import { Article } from '../model/article';

export const JavaArticleAction = createAction('Java');
export const AngularArticleAction = createAction('Angular');
export const FavoriteArticleAction = createAction(
  'Favorite_Article',
  props<{ payload: Article[] }>()
);
