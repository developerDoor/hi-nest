import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";


// router 객체 역할을한다.
// url의 entry Point를 컨드롤한다.
@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll() :Movie[] {
    return this.movieService.getAll()
  }

  // @Get("search")
  // search(@Query("year") searchingYear: string) {
  //   return `we are searching for a movie made after: ${searchingYear}`;
  // }

  // nestJS에서는 무언가 필요하면 우리가 요청해야만 한다. 기억하자!
  // @Param이 없다면 작동하지 않는다. parameter의 decorator를 사용하면 NestJS는 우리가 URL에 있는 id paameter를 원하는걸 알것이다.
  // @Get('/:id')이 부분과 getOne(@Param("id") 이 부분의 id 2개는 이름이 서로 같아야한다. 하지만 id: string 이부분은 달라도 된다.
  @Get(':id')
  getOne(@Param("id") movieId: number): Movie {
      console.log(typeof movieId)
      return this.movieService.getOne(movieId)
  }

  @Post()
  create(@Body() movieData: CreateMovieDto){
    return this.movieService.create(movieData);
  }

  // delete의 경우에는 무슨 movie를 지울지 알아야한다.
  @Delete("/:id")
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(movieId, updateData);
  }
}
