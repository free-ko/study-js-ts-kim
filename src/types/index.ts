import View from "../core/view";
import { NewsFeedView } from "../page";

export interface NewsStore {
  getAllFeeds: () => NewsFeed[];
  getFeed: (position: number) => NewsFeedView;
  setFeeds: (feeds: NewsFeed[]) => void;
  makeRead: (id: number) => void;
  hasFeeds: boolean;
  currentPage: number;
  numberOfFeed: number;
  nextPage: number;
  prePage: number;
}

export interface News {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

export interface NewsFeed extends News {
  readonly points: number;
  readonly comments_count: number;
  read?: boolean;
}

export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

export interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

export interface RouteInfo {
  paht: string;
  page: View;
  params: RegExp | null;
}
