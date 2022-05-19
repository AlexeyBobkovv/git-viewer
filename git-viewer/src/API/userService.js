export default class userService {
  static async getUserInfo(userName) {
    // const response = await fetch(`https://api.github.com/users/${userName}`);
    const response = await fetch(`https://api.github.com/users/gaearon`);
    if (response.status >= 400 && response.status <= 599) {
      console.log("object :>> ");
      throw new Error(`There is no such users`);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  static async getUserRepos(userName, pageNum) {
    // const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    const response = await fetch(
      `https://api.github.com/users/gaearon/repos?page=1&per_page=4`
    );
    const responseAllItms = await fetch(
      `https://api.github.com/users/gaearon/repos`
    );

    // return response;
    const jsonAllItms = await responseAllItms.json();
    const listLength = jsonAllItms.length;
    const jsonResponse = await response.json();
    return { jsonResponse, listLength };
  }
}
