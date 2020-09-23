module.exports = {
    PORT: process.env.PORT || 8000,
    PROD_LINK: 'https://intense-mesa-76351.herokuapp.com/',
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL:
      process.env.DATABASE_URL || 'postgres://stdhiiptcynyvz:b7f8059904a8e2193bbe5bda94cc2570ae7fe6ddd05f2d943ec453257fa10c84@ec2-3-218-75-21.compute-1.amazonaws.com:5432/d610at55992g4c',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgres://stdhiiptcynyvz:b7f8059904a8e2193bbe5bda94cc2570ae7fe6ddd05f2d943ec453257fa10c84@ec2-3-218-75-21.compute-1.amazonaws.com:5432/d610at55992g4c'
  }