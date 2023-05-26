export interface ErrorResponse {
  code: number;
  errors: Array<ErrorResponseErrors>;
  requestId?: string;
  errorCodes?: string[];
}

export type ResponseHandler = (response: Response) => Promise<Response>;

interface ErrorResponseErrors {
  message: string;
  details?: string;
  field?: string;
}
