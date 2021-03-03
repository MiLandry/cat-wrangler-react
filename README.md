# Cat Wrangler, a Landry Specification Reference Implementation

A mobile app that can facilitate users to create and orchestrate events and gatherings amongst friends, with features to request rsvps, statuses, supplies, and to contact attendees.

This is a reference implementation of the   [Landry Enterprise Specification](https://github.com/MiLandry/Landry-Enterprise-Specification)

This application is paired with its [API, another reference implementation.](https://github.com/MiLandry/cat-wrangler-api)

## Get Started

Install the client project dependencies:


```bash

npm install

```



Run the client project:



```bash

npm start

```



The application runs by on port `4040` to mitigate conflicting with other client applications you may be running.



Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.


## Library docs

### Auth, Auth : Oauth

https://auth0.com/blog/get-started-with-flutter-authentication/



### Open Api Document
can be found at https://app.swaggerhub.com/apis-docs/guevarravirtual/cat-wrangler/1.0.0



### Environment variables

https://create-react-app.dev/docs/advanced-configuration/

### Linting and hooks
dev tool called husky is an easy way to set up precommit hooks on the developer machine https://typicode.github.io/husky/#/

### Unit tests
Jest

## License
MIT
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Implementation tracking legend

🟦 Not required

🟥 Problem not solved

🟧 Problem solved by different specification and implementation

🟨 Specification partially implemented (either a custom library or a third party library)

🟩 Specification implemented





## Implementation status


🟩 Authorization\
🟩 Authentication\
🟩 Navigation and Routing\
  Community Component library : look at bit.dev\
  🟩home screen\
    🟩settings screen\
    🟩dashboard\
    🟥search tools\
    🟥feed\
🟧 Environment variables (env library)\
🟩 UI UX\
🟥 CRUD Support\
🟥 Declarative forms\
🟥 Search and Query\
🟥 Workflow engine Support\
🟥 Container ready\
🟥 Cloud Ready\
🟩 scripted development builds, starts, and debugging\
🟩 Unit test framework
🟩 hot reloading\
🟩 dependency management\
🟩 linting\






