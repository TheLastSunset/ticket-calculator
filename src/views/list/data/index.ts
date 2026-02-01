import type { Product } from '@/views/list/types';
import type { ApiResponseBody } from '@/api/types';
import productList from './productListResponse.json';
import productCategoryList from './productCategoryList.json';
import type { ListApiData as ProductCategoryListApiData } from '@/api/productCategory/types';

export const products: ApiResponseBody<Product[]> = {
  success: productList.success,
  code: productList.code,
  message: productList.message,
  data: productList.data,
};

export const productCategories: ApiResponseBody<ProductCategoryListApiData[]> = {
  success: productCategoryList.success,
  code: productCategoryList.code,
  message: productCategoryList.message,
  data: productCategoryList.data,
};
