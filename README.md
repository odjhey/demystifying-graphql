# graphql

- best resource - https://graphql.org/learn/

## usages

1. transport data
   - read data from server (query)
   - request changes to data (mutate)

## facts

1. most common, graphql-over-http
1. schema = typedefinition + resolver
   1. typedef = structure of the data
   2. resolver = actual data/behavior
1. typedef and resolvers should mirror each other

## what is http

### http request

```http
GET localhost/something HTTP/1.1
content-type: plain/text

hello world
```

### http response

```http
HTTP/1.1 200 OK
content-type: plain/text

hello world
```
