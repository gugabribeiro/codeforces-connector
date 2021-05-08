# Codeforces Connector

Codeforces Connector following the JIP (Judge Integration Protocol)

The following REST routes are available:

```
GET /users/:user/submissions
```

Response:

```json
{
  "problemId": "codeforces_contestId/index",
  "momentInSeconds": "long",
  "verdict": "enumeration of (SOLVED, TRIED)"
}
```
