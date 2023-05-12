import bcrypt = require('bcryptjs');
import UserModel from '../database/models/Usermodel';

async function loginUser(emailUser: string, password: string) {
  const users = await UserModel.findOne({ where: { email: emailUser } });
  if (!users) {
    return null;
  }
  const bcryptCompare = bcrypt.compareSync(password, users.dataValues.password);
  console.log(users.dataValues.password);

  if (bcryptCompare) {
    const { id, email, role, username } = users.dataValues;
    const user = {
      id,
      email,
      role,
      username,
    };
    return user;
  }
}

export default { loginUser };
