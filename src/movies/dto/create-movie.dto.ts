// DTO는 데이터 전송 객체이다.
// DTO는 프로그래머로서 코드를 더 간결하게 만들 수 있도록 도와준다.
// 그리고 NestJS가 들어오는 쿼리에 대해 유효성 검사를 할 수 있게 해준다.
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}