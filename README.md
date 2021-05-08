# Judge Connector

This is a template project to facilitate the implementation of a new Judge Connector following the Judge Integration Protocol (JIP)

You will need to implement the following REST routes:

```
GET /users/:user/submissions
```

Pay attention for the fact that the response of the above route should follow this pattern:

```json
{
  "problemId": "judge_problemId",
  "momentInSeconds": "long",
  "verdict": "enumeration of (SOLVED, TRIED)"
}
```
