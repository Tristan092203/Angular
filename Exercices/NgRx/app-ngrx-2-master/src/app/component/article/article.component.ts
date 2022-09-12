import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article, FAVORITE_ARTICLES } from 'src/app/model/article';
import { ArticleState } from 'src/app/store/app.state';
import { getArticles } from 'src/app/store/article.selector';
import * as fromActions from '../../store/article.actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private store: Store<ArticleState>) {
    this.articles$ = store.pipe(select(getArticles));
  }

  ngOnInit(): void {}



  showAngularArticle(){
    this.store.dispatch(fromActions.AngularArticleAction());
  }


  showJavaArticle() {


    this.store.dispatch(fromActions.JavaArticleAction());
  }

  showFavoriteArticle() {
    this.store.dispatch(
      fromActions.FavoriteArticleAction({ payload: FAVORITE_ARTICLES })
    );
  }
}
