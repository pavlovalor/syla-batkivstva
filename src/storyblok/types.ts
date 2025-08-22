export interface Blok<$Props extends object> {
  blok: $Props & {
    _uid: string,
    _editable: string,
    component: string,
  }
}

export interface MediaAsset {
  alt: string,
  copyright: string,
  fieldtype: 'asset', // | 'something-else'
  filename: string,
  focus: string,
  id: number,
  is_external_url: boolean,
  meta_data: object,
  name: string,
  source: string,
  title: string,
}

export interface PageProps {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};