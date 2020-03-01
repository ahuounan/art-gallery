export interface PaintingsState {
  paintings: any;
  isFetching: boolean;
  error: boolean;
}

export interface PaintingsFetchRequestPayload {}

export type PaintingsFetchResponsePayload = Painting[];

export interface Painting {
  name_cn: string;
  name_en: string;
  series_n: number;
  medium_cn: string;
  medium_en: string;
  dimensions: string;
  year: number;
  id: number;
  collection: number;
  collection_name: string;
  src_t: string;
  src_l: string;
  src_m: string;
  src_h: string;
}
