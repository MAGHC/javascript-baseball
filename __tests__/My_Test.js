const App = require("../src/App");
const { GAME_MESSAGES, RANGE_NUMBER, ERROR_MESSAGES } = require("../src/Constant");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 메세지 테스트 ", () => {
  test("게임 시작 메세지 테스트", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(GAME_MESSAGES.START));
  });
});

describe("기능 테스트", () => {
  test("입력받은 문자 배열로 만드는 기능", () => {
    const input = 123;
    const result = JSON.stringify(App.convertUserNumberToArray(input));
    const answer = ["1", "2", "3"];

    expect(result).toEqual(JSON.stringify(answer));
  });

  test("숫자 비교 기능", () => {
    // App.js 32번째줄 테스트를 위한 return 값 주석처리

    const user = [123, 214, 213];
    const computer = [2, 1, 3];
    const answers = [
      { strikeCount: 1, ballCount: 2 },
      { strikeCount: 2, ballCount: 0 },
      { strikeCount: 3, ballCount: 0 },
    ];

    user.map((item, i) => {
      const result = JSON.stringify(App.compareNumber(item, computer));
      expect(result).toEqual(JSON.stringify(answers[i]));
    });
  });
});
