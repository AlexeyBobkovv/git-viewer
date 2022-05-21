export default class userService {
  static async getUserInfo(userName) {
    // const response = await fetch(`https://api.github.com/users/${userName}`);
    const response = await fetch(`https://api.github.com/users/gaearon`);
    // const response = await fetch(`https://api.github.com/users/gaearon`);
    if (response.status >= 400 && response.status <= 599) {
      throw new Error(`There is no such users`);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  static async getUserRepos(userName, pageOffset) {
    console.log("pageOffset :>> ", pageOffset);
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=4&page=${
        pageOffset + 1
      }`
    );

    return response;
  }
}
