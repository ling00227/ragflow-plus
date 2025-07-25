export interface CreateOrUpdateTableRequestData {
  id?: string
  username: string
  email?: string
  password?: string
}

export interface TableRequestData {
  /** 当前页码 */
  currentPage: number
  /** 查询条数 */
  size: number
  /** 查询参数：用户名 */
  username?: string
  /** 查询参数：邮箱 */
  email?: string
  /** 排序字段 */
  sort_by: string
  /** 排序方式 */
  sort_order: string
}

export interface TableData {
  id: string
  username: string
  email: string
  createTime: string
  updateTime: string
}

export type TableResponseData = ApiResponseData<{
  list: TableData[]
  total: number
}>
