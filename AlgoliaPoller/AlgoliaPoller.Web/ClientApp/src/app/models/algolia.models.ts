export interface IAlgoliaResponse {
  hits?: (IHit)[] | null;
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}
export interface IHit {
  created_at: string;
  title: string;
  url?: string | null;
  author: string;
  points: number;
  story_text?: string | null;
  comment_text?: null;
  num_comments: number;
  story_id?: null;
  story_title?: null;
  story_url?: null;
  parent_id?: null;
  created_at_i: number;
  _tags?: (string)[] | null;
  objectID: string;
  _highlightResult: IHighlightResult;
}
export interface IHighlightResult {
  title: IValue;
  url?: IValue | null;
  author: IValue;
  story_text?: IValue | null;
}
export interface IValue {
  value: string;
  matchLevel: string;
  matchedWords?: (null)[] | null;
}
