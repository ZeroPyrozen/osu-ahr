import { assert } from 'chai';
import { StatParser, StatStatuses, StatResult } from '../parsers';

const testTexts = [
  "Stats for (Jason)[https://osu.ppy.sh/u/7342098] is Multiplaying:",
  "Score:    18,163,888,782 (#1631)",
  "Plays:    78245 (lv100)",
  "Accuracy: 97.36%",
  "Stats for (horcrux18)[https://osu.ppy.sh/u/8778911] is Afk:",
  "Score:    584,565,786 (#260177)",
  "Plays:    5695 (lv64)",
  "Accuracy: 86.94%",
  "Stats for (gviz)[https://osu.ppy.sh/u/15145414] is Multiplayer:",
  "Score:    00 (#0)",
  "Plays:    7 (lv2)",
  "Accuracy: 0%",
  "Stats for (Angel Arrow)[https://osu.ppy.sh/u/1970239] is Testing:",
  "Score:    59,315,895,109 (#1006)",
  "Plays:    104962 (lv102)",
  "Accuracy: 98.16%",
  "Stats for (Foreskin)[https://osu.ppy.sh/u/3760263]:",
  "Score:    00 (#0)",
  "Plays:    1 (lv1)",
  "Accuracy: 0.00%"
];

const expectedResults = [
  defResult("Jason", 7342098, StatStatuses.Multiplaying, 18163888782, 1631, 78245, 100, 97.36),
  defResult("horcrux18", 8778911, StatStatuses.Afk, 584_565_786, 260177, 5695, 64, 86.94),
  defResult("gviz", 15145414, StatStatuses.Multiplayer, 0, 0, 7, 2, 0),
  defResult("Angel Arrow", 1970239, StatStatuses.Testing, 59315895109, 1006, 104962, 102, 98.16),
  defResult("Foreskin", 3760263, StatStatuses.None, 0, 0, 1, 1, 0),
];

function defResult(name: string, id: number, status: StatStatuses, score: number, rank: number, plays: number, level: number, accuracy: number): StatResult {
  return { name, id, status, score, rank, plays, level, accuracy }
}

it("StatParser Test", function () {
  assert.equal(testTexts.length, expectedResults.length * 4);
  const parser = new StatParser()
  for (let i = 0; i < expectedResults.length; i++) {
    for (let j = 0; j < 4; j++) {
      assert.isTrue(parser.feedLine(testTexts[i * 4 + j]));
    }
    assert.deepEqual(parser.result, expectedResults[i]);
  }
});