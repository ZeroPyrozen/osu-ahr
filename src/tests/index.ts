import { assert } from 'chai';
import { CommandParserTest } from './CommandParserTest';
import { DummyIrcClientTest } from './DummyIrcClientTest';
import { LobbyTest } from "./LobbyTest";
import { AutoHostSelectorTest } from "./AutoHostSelectorTest";
import { MpSettingsParserTest } from "./MpSettingsParserTest";
import { HostSkipperTest } from "./HostSkipperTest";
import log4js from "log4js";

log4js.configure("config/mocha_log4js.json");

describe("ahr tests", () => {
  describe("BanchoBot Parser Tests", CommandParserTest);
  describe("Dummy Irc Client Tests", DummyIrcClientTest);
  describe("lobby tests", LobbyTest);
  describe("AutoHostSelector Tests", AutoHostSelectorTest);
  describe("MpSettingsParser Tests", MpSettingsParserTest);
  describe("HostSkipper tests", HostSkipperTest);
});
