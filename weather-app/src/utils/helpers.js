import dayjs from "dayjs";
import fetchMock from "fetch-mock";

export const monthName = (item) => {
  return dayjs(item.dt_txt, "YYYY-MM-DD").format("MMMM D, YYYY");
};

export function mockAPI() {
  fetchMock.mock("https://api.example.com/items", {
    Test: "Test",
    Test1: "Test1",
  });
}
