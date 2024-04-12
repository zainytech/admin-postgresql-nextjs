-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "mainHeading" TEXT NOT NULL,
    "subTitle1" TEXT NOT NULL,
    "subPara1" TEXT,
    "subTitle2" TEXT NOT NULL,
    "subPara2" TEXT,
    "subTitle3" TEXT NOT NULL,
    "subPara3" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);
