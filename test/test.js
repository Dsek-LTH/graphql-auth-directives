/*import test from "ava";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import gql from "graphql-tag";
import fetch from "node-fetch";

let client;

const headers = {
  "x-error": "Middleware error"
};*/

// TODO: convert tests to non-JWT

/*test.before(() => {
  client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:3000", fetch, headers }),
    cache: new InMemoryCache()
  });
});

test("Fail if no auth token", async t => {
  t.plan(1);

  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:3000", fetch }),
    cache: new InMemoryCache()
  });

  await client
    .query({
      query: gql`
        {
          userById(userId: "123456") {
            id
            name
          }
        }
      `
    })
    .then(data => {
      t.fail("AuthorizationError should be throw");
    })
    .catch(error => {
      t.pass();
    });
});

test("No error with token", async t => {
  t.plan(1);

  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHUkFORHN0YWNrIiwiaWF0IjoxNTQ5MTQ1Mjk0LCJleHAiOjE1ODA2ODEzMDcsImF1ZCI6ImdyYW5kc3RhY2suaW8iLCJzdWIiOiJib2JAbG9ibGF3LmNvbSIsIlJvbGUiOiJBRE1JTiIsIlNjb3BlIjpbIlVzZXI6UmVhZCIsIlVzZXI6Q3JlYXRlIiwiVXNlcjpVcGRhdGUiLCJVc2VyOkRlbGV0ZSJdfQ.nKADki8iKTpKqq3CVdrGAUrSzSBmFolWzYOsA_ULSdo"
  };

  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:3000", fetch, headers }),
    cache: new InMemoryCache()
  });

  await client
    .query({
      query: gql`
        {
          userById(userId: "123456") {
            id
            name
          }
        }
      `
    })
    .then(data => {
      // TODO: verify expected data
      t.pass();
    })
    .catch(error => {
      t.fail();
    });
});

test("Mutation resolver is not called when Auth fails", async t => {
  t.plan(1);

  // This JWT does not contain User:Create scope claim
  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHUkFORHN0YWNrIiwiaWF0IjoxNTQ5MTQ1Mjk0LCJleHAiOjE1ODA2ODEzMDcsImF1ZCI6ImdyYW5kc3RhY2suaW8iLCJzdWIiOiJib2JAbG9ibGF3LmNvbSIsIlJvbGUiOiJBRE1JTiIsIlNjb3BlIjpbIlVzZXI6UmVhZCIsIlVzZXI6VXBkYXRlIiwiVXNlcjpEZWxldGUiXX0.cXOlwyZOi--tHmLyf32iC37JXGj4DrvdOsQVK5VHmuY"
  };

  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:3000", fetch, headers }),
    cache: new InMemoryCache()
  });

  await client
    .mutate({
      mutation: gql`
        mutation {
          createUser(id: "1234", name: "Bob") {
            id
          }
        }
      `
    })
    .then(data => {
      t.fail("User should not be authorized for this mutation");
    })
    .catch(error => {
      //console.log(error.message);
      t.pass();
    });
});*/
