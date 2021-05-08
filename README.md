# Codeforces Connector

Codeforces Connector following the JIP (Judge Integration Protocol)

The following REST routes are available:

Request:

```
GET /problems
```

Response:

```json
{
  "id": "codeforces_{contestId}-{index}",
  "name": "string",
  "level": "number",
  "topics": ["string"]
}
```

Request:

```
GET /problems/:problemId/redirect
```

Response:

```
Redirect to codeforces problem
```

Request:

```
GET /users/:user
```

Response:

```json
{
  "name": "string",
  "level": "number"
}
```

Request:

```
GET /users/:user/submissions
```

Response:

```json
{
  "problemId": "codeforces_{contestId}-{index}",
  "momentInSeconds": "long",
  "verdict": "enumeration of (SOLVED, TRIED)"
}
```
