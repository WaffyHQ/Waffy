import { pgTable, uuid, text, bigint, date, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid().defaultRandom().primaryKey().notNull(),
    accountId: uuid("account_id").defaultRandom().notNull(),
    firstName: text("first_name"),
    lastName: text("last_name"),
    email: text().notNull(),
    phoneNo: bigint("phone_no", { mode: "number" }).notNull(),
    dob: date(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const waitlist = pgTable("waitlist", {
    id: uuid().defaultRandom().primaryKey().notNull(),
    email: text().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});