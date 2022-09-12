import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from './app.state';

export const getArticleState =
  createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
  getArticleState,
  (state: ArticleState) => state.articles
);
