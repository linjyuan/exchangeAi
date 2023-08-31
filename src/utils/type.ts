export type CacheUserItem = {
  /** 是否需要更新数据源。 */
  needRefresh?: boolean;
  /** 最后更新时间 更新超过 10 分钟异步去更新。 */
  lastModifyTime: number;
  /** 获得的徽章 */
  itemIds: number[];
  /** 佩戴的徽章 */
  wearingItemId: number;
  /** 归属地 */
  locPlace: string;
  /** 头像 */
  avatar: string;
  /** 最后一次上下线时间 */
  lastOptTime: number;
  /** 用户名称 */
  name: string;
  /** uid */
  uid: number;
};
