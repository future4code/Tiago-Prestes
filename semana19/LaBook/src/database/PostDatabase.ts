// import { BaseDatabase } from "./BaseDataBase";

// export class PostDatabase extends BaseDatabase {
//     private TABLE_NAME = "Post"

//     async create(post: Post | Ticket) {
//         await BaseDatabase.connection(this.TABLE_NAME)
//             .insert(post)
//     }

//     async getAll() {
//         return BaseDatabase.connection(this.TABLE_NAME)
//             .select()
//     }
// }