export const generateId = (size: number = 24) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
