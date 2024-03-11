import MovieModel from '../model/movie.model';
import express, { Request, Response } from 'express';
import { logger, sendRes } from '../util/index';
import { validationResult } from 'express-validator';
import nodeCache from 'node-cache';
const cache = new nodeCache();

export const addMovie = async (req: Request, res: Response) => {
  const currentRoute = req.headers?.host + req.originalUrl;
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    logger.info(
      JSON.stringify({
        status: '401',
        result: 'Validation Failed No Data',
        app: 'movie-lobby',
        currentRoute,
        req_body: req.body,
      })
    );
    return sendRes(req, res, validationErrors.array(), 'COMMON_MESSAGE', 'VALIDATION_FAILED');
  } else {
    try {
      const movies = req.body.movies;
      const addMovieRes = await MovieModel.insertMany(movies);
      sendRes(req, res, addMovieRes, 'ADMIN', 'ADD_MOVIE_SUCCESS');
    } catch (err) {
      logger.info(JSON.stringify({ api: 'addMovie', err: err }));
      sendRes(req, res, err, 'COMMON_MESSAGE', 'ERROR');
    }
  }
};
export const getAllMovies = async (req: Request, res: Response) => {
  const currentRoute = req.headers?.host + req.originalUrl;
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    logger.info(
      JSON.stringify({
        status: '401',
        result: 'Validation Failed No Data',
        app: 'movie-lobby',
        currentRoute,
        req_body: req.body,
      })
    );
    return sendRes(req, res, validationErrors.array(), 'COMMON_MESSAGE', 'VALIDATION_FAILED');
  } else {
    try {
      const cacheData = cache.get(req.originalUrl);
      if (cacheData) {
        logger.info(`cache data present for key: ${req.originalUrl}`);
        sendRes(req, res, cacheData, 'USER', 'GET_AVAILABLE_MOVIE_SUCCESS');
      } else {
        const getAllMovieRes = await MovieModel.find({ status: true });
        sendRes(req, res, getAllMovieRes, 'USER', 'GET_AVAILABLE_MOVIE_SUCCESS');
      }
    } catch (err) {
      logger.info(JSON.stringify({ api: 'getAllMovies', err: err }));
      sendRes(req, res, err, 'COMMON_MESSAGE', 'ERROR');
    }
  }
};
export const searchMovie = async (req: Request, res: Response) => {
  const currentRoute = req.headers?.host + req.originalUrl;
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    logger.info(
      JSON.stringify({
        status: '401',
        result: 'Validation Failed No Data',
        app: 'movie-lobby',
        currentRoute,
        req_body: req.body,
      })
    );
    return sendRes(req, res, validationErrors.array(), 'COMMON_MESSAGE', 'VALIDATION_FAILED');
  } else {
    try {
      const cacheData = await cache.get(req.originalUrl);
      if (cacheData) {
        logger.info(`cache data for key: ${req.originalUrl}`);
        sendRes(req, res, cacheData, 'USER', 'GET_SEARCHED_MOVIE_SUCCESS');
      } else {
        const searchQuery: any = req?.query?.q;
        const getSearchedMovies = await MovieModel.find({
          status: true,
          $or: [{ title: new RegExp(searchQuery, 'i') }, { genre: new RegExp(searchQuery, 'i') }],
        });
        sendRes(req, res, getSearchedMovies, 'USER', 'GET_SEARCHED_MOVIE_SUCCESS');
      }
    } catch (err) {
      logger.info(JSON.stringify({ api: 'searchMovie', err: err }));
      sendRes(req, res, err, 'COMMON_MESSAGE', 'ERROR');
    }
  }
};
export const updateMovie = async (req: Request, res: Response) => {
  const currentRoute = req.headers?.host + req.originalUrl;
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    logger.info(
      JSON.stringify({
        status: '401',
        result: 'Validation Failed No Data',
        app: 'movie-lobby',
        currentRoute,
        req_body: req.body,
      })
    );
    return sendRes(req, res, validationErrors.array(), 'COMMON_MESSAGE', 'VALIDATION_FAILED');
  } else {
    try {
      const _id: string = req?.params?.id;
      const updatedData: object = req?.body;
      const updateMovie = await MovieModel.findByIdAndUpdate(_id, { $set: updatedData }, { new: true });
      sendRes(req, res, updateMovie, 'ADMIN', 'UPDATE_MOVIE_SUCCESS');
    } catch (err) {
      logger.info(JSON.stringify({ api: 'updateMovie', err: err }));
      sendRes(req, res, err, 'COMMON_MESSAGE', 'ERROR');
    }
  }
};
export const removeMovie = async (req: Request, res: Response) => {
  const currentRoute = req.headers?.host + req.originalUrl;
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    logger.info(
      JSON.stringify({
        status: '401',
        result: 'Validation Failed No Data',
        app: 'movie-lobby',
        currentRoute,
        req_body: req.body,
      })
    );
    return sendRes(req, res, validationErrors.array(), 'COMMON_MESSAGE', 'VALIDATION_FAILED');
  } else {
    try {
      const _id: string = req?.params?.id;
      const deleteMovie = await MovieModel.deleteOne({ _id: _id });
      sendRes(req, res, deleteMovie, 'ADMIN', 'REMOVE_MOVIE_SUCCESS');
    } catch (err) {
      logger.info(JSON.stringify({ api: 'removeMovie', err: err }));
      sendRes(req, res, err, 'COMMON_MESSAGE', 'ERROR');
    }
  }
};
