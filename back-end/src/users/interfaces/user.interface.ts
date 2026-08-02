export interface IUser {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: number): Promise<IUser | null>;
  create(data: {
    email: string;
    name: string;
    password: string;
  }): Promise<IUser>;
}
