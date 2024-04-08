import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQxM2QyYjRiNmQzZjYyYjM5N2Q5MWVmOWUyNTgzZCIsInN1YiI6IjY2MTMwYzgwMGJiMDc2MDE2MjJmNmFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tErG33TQwFlKq6-feJ6OIm_vY7Li-xOgJDgDMXZjm8o'
  }
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=23413d2b4b6d3f62b397d91ef9e2583d`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=23413d2b4b6d3f62b397d91ef9e2583d`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=23413d2b4b6d3f62b397d91ef9e2583d`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=23413d2b4b6d3f62b397d91ef9e2583d', options)
  }
}
