import express, { Request, Response } from 'express';
import { adminAuth } from '../middleware/index';
const movie = express.Router();

//controller
import { getAllMovies, searchMovie, addMovie, removeMovie, updateMovie } from '../controller/movie.controller';
import { validator } from '../util/validator';

movie.get('/movies', (req: Request, res: Response) => {
  getAllMovies(req, res);
});

movie.get('/search', validator.user.searchMovie, (req: Request, res: Response) => {
  searchMovie(req, res);
});
movie.post('/movies', [adminAuth, validator.user.addMovie], (req: Request, res: Response) => {
  addMovie(req, res);
});

movie.put('/movies/:id', [adminAuth, validator.user.updateMovie], (req: Request, res: Response) => {
  updateMovie(req, res);
});
movie.delete('/movies/:id', [adminAuth, validator.user.deleteMovie], (req: Request, res: Response) => {
  removeMovie(req, res);
});

export = movie;
