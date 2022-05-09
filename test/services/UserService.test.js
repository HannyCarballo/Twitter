const UserService = require("../../app/Services/UserService");

describe("Test for UserService", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "HannyCarballo", "Hanny");
    expect(user.username).toBe("HannyCarballo");
    expect(user.name).toBe("Hanny");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "HannyCarballo", "Hanny");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("HannyCarballo");
    expect(userInfoInList[2]).toBe("Hanny");
    expect(userInfoInList[3]).toBe("Sin bio");
  });

  test("3. Update username", () => {
    const user = UserService.create(1, "HannyCarballo", "Hanny");
    UserService.updateUserUsername(user, "HannC");
    expect(user.username).toBe("HannC");
  });

  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "HannyCarballo1", "Hanny");
    const user2 = UserService.create(2, "HannyCarballo2", "Hanny");
    const user3 = UserService.create(3, "HannyCarballo3", "Hanny");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("HannyCarballo1");
    expect(usernames).toContain("HannyCarballo2");
    expect(usernames).toContain("HannyCarballo3");
  });
});