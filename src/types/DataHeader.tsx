export type Rate = {
  text: string;
  num: number;
  difference: string;
};

export type Rates = Array<Rate>;

export type Advertising = {
  href: string;
  title: string;
  text: string;
  src: string;
};

export type News = Array<NewsItem>;

export type NewsItem = {
  url: string,
  src: string,
  title: string
};

export type Titles = Array<{ title: string, url: string, class: string }>;

export type DataHeader = {
  titles: Titles;
  news: News;
  rates: Rates;
  advertising: Advertising;
}
