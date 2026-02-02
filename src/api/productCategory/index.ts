import { http } from '@/utils/request';
import type { ApiResponseBody } from '@/api/types';
import type { ListApiData } from '@/api/productCategory/types';

/**
 * @returns UseAxiosReturn
 */
export function list(): Promise<ApiResponseBody<ListApiData[]>> {
  return http.post(`/api/bizProductCategory/list`);
}
