const User = require("../../app/models/User");

describe("User", () => {
  test("Create an User object", () => {
    //Aqui invocas el codigo que vas a usar en tu app
    const user = new User(1, "HannyCarballo", "Hanny", "Bio");

    //Aqui validaras resultados del codigo
    expect(user.id).toBe(1);
    expect(user.username).toBe("HannyCarballo");
    expect(user.name).toBe("Hanny");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test("Add getters", () => {
    const user = new User(1, "HannyCarballo", "Hanny", "Bio");
    expect(user.getUsername).toBe("HannyCarballo");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  test("Add setters", () => {
    const user = new User(1, "HannyCarballo", "Hanny", "Bio");
    user.setUsername = "Han";
    expect(user.username).toBe("Han");

    user.setBio = "New bio";
    expect(user.bio).toBe("New bio");
  });
});