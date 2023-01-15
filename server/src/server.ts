import cors from "cors";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(express.json());
app.use(cors())

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      hourEnd: true,
      weekDays: true,
      hourStart: true,
      yearsPlaying: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(","),
      hourEnd: convertMinutesToHourString(ad.hourEnd),
      hourStart: convertMinutesToHourString(ad.hourStart),
    }))
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;

  const { discord } = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({ discord });
});

app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      discord: body.discord,
      yearsPlaying: body.yearsPlaying,
      weekDays: body.weekDays.join(","),
      useVoiceChannel: body.useVoiceChannel,
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      hourStart: convertHourStringToMinutes(body.hourStart),
    },
  });

  return res.status(201).json(ad);
});

app.listen(3333);
