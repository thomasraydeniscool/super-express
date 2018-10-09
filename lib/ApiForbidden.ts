import * as express from 'express';
import * as HTTPStatus from 'http-status';

import { ApiError } from './ApiError';

export class ApiForbidden extends ApiError {
  /**
   * Api Forbidden
   * @constructor
   * @param res
   */
  constructor(res: express.Response) {
    super(res);
    this.message = 'Access denied';
    this.code = HTTPStatus.FORBIDDEN;
  }
}
