import {
  describe,
  beforeEach,
  it,
} from "https://deno.land/std@0.202.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

import "@nestjs/platform-express";
import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    const app = testingModule.createNestApplication();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      assertEquals(appController.getHello(), "Hello World!");
    });
  });
});
