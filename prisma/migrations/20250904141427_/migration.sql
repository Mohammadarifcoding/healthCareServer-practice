-- AlterTable
ALTER TABLE "public"."admins" ALTER COLUMN "profilePhoto" DROP NOT NULL,
ALTER COLUMN "isDeleted" SET DEFAULT false;
