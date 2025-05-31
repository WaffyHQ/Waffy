import { pgTable, uuid, text, bigint, date, timestamp } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: uuid().defaultRandom().primaryKey().notNull(),
    accountId: uuid("account_id").defaultRandom().notNull(),
    name: text("name").notNull(),
    image: text("image"),
    email: text().notNull(),
    password: text("password"),
    provider: text("provider"),
    providerId: text("providerId"),
    phoneNo: text("phoneNo"),
    dob: date(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const waitlist = pgTable("waitlist", {
    id: uuid().defaultRandom().primaryKey().notNull(),
    email: text().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});