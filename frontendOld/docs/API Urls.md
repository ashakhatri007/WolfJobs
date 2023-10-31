# API URLS

We have used the following API urls to fetch data from the server to client.

## Login

Method: `POST`

`/users/crete-session`

Response: 1

```sh
res.json(422, {
        message: "Invalid username or password",
      });
```

Response: 2

```sh
res.json(200, {
      message: "Sign In Successful, here is your token, please keep it safe",
      data: {
        token: jwt.sign(user.toJSON(), "caloriesapp", { expiresIn: "100000" }),
        user: user,
      },
      success: true,
    });
```

## Sign Up

Method: `POST`
`/users/signup`
Response: 1

```sh
res.json(422, {
        message: "Passwords donot match",
      });
```

Response: 2

```sh
res.json(200, {
          message: "Sign Up Successful, here is your token, plz keep it safe",
          data: {
            token: jwt.sign(user.toJSON(), "caloriesapp", {
              expiresIn: "100000",
            }),
            user,
          },
          success: true,
        })
```

## Edit Profile

Method: `POST`

`/users/edit`

Response:

```sh
res.json(200, {
      message: "User is updated Successfully",
      data: {
        user,
      },
      success: true,
    });
```

## Create History

Method: `POST`

`/users/createhistory`

Response:

```sh
res.json(200, {
            message: "History Created Successfully",
            data: {
              history:history,
            },
            success: true,
          });
```

## Get History

Method: `GET`

`/users/gethistory?id=${userId}&date=${date}`

Response:

```sh
res.json(200, {
      message: "The User Profile",
      data: {
        history: history,
      },
      success: true,
    })
```

## Get the jobs according to search criteria

Method: `GET`

`/users/search/${searchText}`

Response:

```sh
res.json(200, {
      message: "The list of Searched Jobs",
      data: {
        users: users,
      },
      success: true,
    })
```
