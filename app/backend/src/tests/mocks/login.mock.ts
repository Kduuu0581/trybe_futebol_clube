import UserModel from '../../database/models/UserModel';

export const login = {
    email: "admin@admin.com",
    password: "12345678"
  }

export const user = {
  id: 1,
  userName: "Admin",
  role: "admin",
  email: "admin@admin.com",
  password: "12345678"
} as UserModel

export const token = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjgwMjQxMjA3LCJleHAiOjE2ODAzMjc2MDd9.7veJ2cUVLzaZ9xGPhRPnfepUNkwI5GjOEi2sd2fezBY"
}

export const invalidToken = {
    "token": "eyJhbGciOiJIUzI1NiIsICJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjgwMjQxMjA3LCJleHAiOjE2ODAzMjc2MDd9.7veJ2cUVLzaZ9xGPhRPnfepUNkwI5GjOEi2sd2fezBY"
}

export const role = {
    role: "admin"
} as UserModel