import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const emails = mysqlTable("emails", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 128 }),
});

type Email = typeof emails.$inferSelect;
