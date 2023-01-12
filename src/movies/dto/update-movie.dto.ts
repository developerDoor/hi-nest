import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// 부분타입(partial type)
export class UpdateMovieDto extends PartialType(CreateMovieDto){}