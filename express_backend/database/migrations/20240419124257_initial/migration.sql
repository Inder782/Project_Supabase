-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stocks" (
    "id" SERIAL NOT NULL,
    "Open" INTEGER NOT NULL,
    "High" INTEGER NOT NULL,
    "Low" INTEGER NOT NULL,
    "Close" INTEGER NOT NULL,
    "Adj_Close" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stocks_pkey" PRIMARY KEY ("id")
);
