import { check, param, query } from 'express-validator';

export const validator = {
  user: {
    searchMovie: [query('q').exists().isLength({ min: 3 }).withMessage('Query , must be at least 3 character long').bail()],
    addMovie: [check('movies', 'Movies Is Mandotary').isArray().withMessage('movies must be array').bail()],
    updateMovie: [param('id').exists().isLength({ min: 10 }).withMessage('Movie ID, must be at least 10 character long').bail()],
    deleteMovie: [param('id').exists().isLength({ min: 10 }).withMessage('Movie ID, must be at least 10 character long').bail()],
  },
};
