import { Action, createReducer, on } from '@ngrx/store';
import { ANGULAR_ARTICLES, JAVA_ARTICLES } from '../model/article';
import { ArticleState } from './app.state';
import * as fromActions from './article.actions';

export const initialeState: ArticleState = { articles: [] };

const article_Reducer = createReducer(
  initialeState,
  on(fromActions.JavaArticleAction, (state) => {
    return {
      articles: JAVA_ARTICLES,
    };
  }),
  on(fromActions.AngularArticleAction, (state) => {
    return {
      articles : ANGULAR_ARTICLES,
    }
  }),
  on(fromActions.FavoriteArticleAction, (state, { payload }) => {
    return {
      articles: payload,
    };
  })
);

export function articleReducer(state: any, action: Action) {
  return article_Reducer(state, action);
}
