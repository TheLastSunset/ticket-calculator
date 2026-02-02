export interface ApiResponseBody<T> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}
