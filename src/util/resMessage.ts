const resMessage: any = {
  COMMON_MESSAGE: {
    WELCOME: {
      success: true,
      message: 'Welcome to Movie APIs!',
      messageCode: 'WELCOME',
      statusCode: 200,
    },
    ERROR: {
      success: false,
      message: 'Something went wrong! Please try again.',
      messageCode: 'ERROR',
      statusCode: 500,
    },
    VALIDATION_FAILED: {
      success: false,
      message: 'Validation Failed! Please try again with correct input.',
      messageCode: 'ERROR',
      statusCode: 500,
    },
    TEST: {
      success: true,
      message: 'Test Response Success!',
      messageCode: 'TEST',
      statusCode: 200,
    },
  },
  ROLE: {
    ADMIN_ROLE_ERROR: {
      success: false,
      message: 'Access Dennied!, Only Admin role can access this api.',
      messageCode: 'ADMIN_ROLE_ERROR',
      statusCode: 403,
    },
  },

  ADMIN: {
    ADD_MOVIE_SUCCESS: {
      success: true,
      message: 'Movie Added Successfully!',
      messageCode: 'ADD_MOVIE_SUCCESS',
      statusCode: 200,
    },
    UPDATE_MOVIE_SUCCESS: {
      success: true,
      message: 'Movie Updated Successfully!',
      messageCode: 'UPDATE_MOVIE_SUCCESS',
      statusCode: 200,
    },
    REMOVE_MOVIE_SUCCESS: {
      success: true,
      message: 'Movie Removed Successfully!',
      messageCode: 'REMOVE_MOVIE_SUCCESS',
      statusCode: 200,
    },
  },
  USER: {
    GET_AVAILABLE_MOVIE_SUCCESS: {
      success: true,
      message: 'Movie Fetched Successfully!',
      messageCode: 'GET_AVAILABLE_MOVIE_SUCCESS',
      statusCode: 200,
    },
    GET_SEARCHED_MOVIE_SUCCESS: {
      success: true,
      message: 'Movie Fetched Successfully!',
      messageCode: 'GET_SEARCHED_MOVIE_SUCCESS',
      statusCode: 200,
    },
  },
};

export = resMessage;
