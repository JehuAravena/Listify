const userValue = localStorage.getItem('user');

export const idUserLogin = parseInt(userValue?.match(/\d+/)?.[0] || "0", 10);
