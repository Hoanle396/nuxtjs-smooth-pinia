export interface IBoardCard {
  className: string;
  style: string;
}
export interface BaseEntity {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
}
