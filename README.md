# Codeforces Connector

Codeforces Connector following the OJIP (Online Judge Integration Protocol)

The following REST routes are available:

## Problems

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

## User profile

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

## User submissions

Request:

```
GET /users/:user/submissions
```

Response:

```json
{
  "problemId": "codeforces_{contestId}-{index}",
  "momentInSeconds": "long",
  "status": "enumeration of (SOLVED, TRIED)"
}
```
