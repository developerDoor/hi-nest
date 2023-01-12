import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // 컨트롤러는 기본적으로 url을 가져오고 함수를 실행한다. express에서 라우터 같은 존재다.
  providers: [],
})
export class AppModule {}
