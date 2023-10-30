import express from 'express';
import 'express-async-errors'

export function errorHandler(err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) {
  if (err.status === 400) {
    // 400 error
    console.error('Client error occurred', err);
    res.status(400).send({
      message: 'Client error occurred'
    });
  } else if (err.status === 404) {
    // 404 error
    console.error('Request not found error occurred', err);
    res.status(400).send({
      message: 'Request not found error occurred'
    });
  } else {
    // 500 error
    console.error('Unexpected error occurred', err);
    res.status(500).send({
      message: 'Unexpected error occurred'
    });
  }
}