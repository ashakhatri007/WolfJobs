# APIs

## Login

Method: `POST`

`/api/v1/users/create-session`

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

`/api/v1/users/signup`

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

Response: 3

```sh
res.json(500, {
      message: "Internal Server Error",
    });
```

## Edit Profile

Method: `POST`

`/api/v1/users/edit`

Response 1:

```sh
res.json(200, {
      message: "User is updated Successfully",
      data: {
        user,
      },
      success: true,
    });
```

Response 2:

```sh
res.json(500, {
        message: "Internal Server Error",
      });
```

Response 3:
```sh
res.json(400, {
      message: "Bad Request",
    });
```

## Create Job

Method: `POST`

`/api/v1/users/createjob`

Response 1:

```sh
res.json(200, {
      data: {
        job: job,
        //token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: "100000" })
      },
      message: "Job Created!!",
      success: true,
    });
```

Response 2:

```sh
res.json(500, {
      message: "NOT CREATED",
    });
```

## Close Job
Method: `POST`

`/api/v1/users/closejob`

Response 1:

```sh
res.json(200, {
      message: "Job is updated Successfully",

      data: {
        job,
      },
      success: true,
    });
```

Response 2:

```sh
res.json(500, {
      message: "Internal Server Error",
    });
```

## Create Application

Method: `POST`

`/api/v1/users/createapplication`

Response 1:

```sh
res.json(400, {
        message: "You have already applied for the job",
        error: true,
      });
```

Response 2: 

```sh
res.json(200, {
      data: {
        application: application,
        //token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: "100000" })
      },
      message: "Job Created!!",
      success: true,
    });
```

Response 3:

```sh
res.json(500, {
      message: "NOT CREATED",
    });
```
