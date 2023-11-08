declare namespace Pwamap {
  type ShopData = {
    index: number;
    distance?: number;
    'タイムスタンプ': string;
    '緯度': string;
    '経度': string;
    'スポット名': string;
    'カテゴリ': string;
    '紹介文': string;
    '画像': string;
    'URL': string;
    '公式サイト1': string;
    '公式サイト2': string;
    '公式サイト3': string;
    '公式サイト4': string
  }

  type LngLat = [number, number]
}
