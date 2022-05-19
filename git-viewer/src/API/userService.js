export default class userService {
  static async getUserInfo(userName) {
    // const response = await fetch(`https://api.github.com/users/${userName}`);
    const response = await fetch(`https://api.github.com/users/AlexeyBobkovv`);
    if (response.status >= 400 && response.status <= 599) {
      console.log("object :>> ");
      throw new Error(`There is no such users`);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  }
}
