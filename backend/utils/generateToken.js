import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'randomShit', { expiresIn: '30d' });
};
export default generateToken;
