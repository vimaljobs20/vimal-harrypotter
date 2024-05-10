export interface Movie {
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: string;
}

export interface MovieDetails{
  id:string;
  title:string;
  duration:string;
  budget:string;
  release_date:string;
  box_office:string;
  cinematographers: string[],
  poster:string;
  producers: string[],
  summary:string;
}
