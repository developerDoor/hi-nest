// 보통은 entities에 실제로 DB 모델을 만들어야한다.

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}