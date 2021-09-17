import { User } from "../entities/User"
import { BaseDatabase } from "./BaseDataBase"

export class UserDatabase extends BaseDatabase {
  private TABLE_NAME = "User"

  async create(user: User) {
    await BaseDatabase.connection(this.TABLE_NAME)
      .insert(user)
  }

  async getAll() {
    return BaseDatabase.connection(this.TABLE_NAME).select()
  }
}
