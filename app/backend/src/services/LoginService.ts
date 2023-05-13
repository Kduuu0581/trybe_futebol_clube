import bcrypt = require('bcryptjs');
import UserModel from '../database/models/UserModel';

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

// async function userRole(id: number) {
//   const user = await UserModel.findOne({ where: { id } });
//   if (!user) {
//     return null;
//   }
//   const { role } = user.dataValues;
//   return role;
// }

export default {
  loginUser,
  // userRole,
};
