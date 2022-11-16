import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  apiKey =
    'live_CmdOSh98XAEFn0ZxrPl4oTdM6ZnLMwjELRzZFasgcf7t7MPqP1dGiKKQcn6POzKy';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let validReq = req.clone({
      headers: new HttpHeaders().set('x-api-key', this.apiKey),
    });
    return next.handle(validReq);
  }
}
