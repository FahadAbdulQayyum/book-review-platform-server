import * as express from 'express';

declare global {
  namespace Express {
    interface User {
      id: number;
      name: string;
      // Add any other properties for your user here
    }

    interface Request {
      user?: User;
    }
  }
}