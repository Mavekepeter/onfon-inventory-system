/*
  Warnings:

  - You are about to drop the column `totalvalue` on the `SalesSummary` table. All the data in the column will be lost.
  - Added the required column `totalValue` to the `SalesSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."PurchaseSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."SalesSummary" DROP COLUMN "totalvalue",
ADD COLUMN     "totalValue" DOUBLE PRECISION NOT NULL;
