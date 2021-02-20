# cat_wrangler




A mobile app that can facilitate users to create and orchestrate events and gatherings amongst friends, with features to request rsvps, statuses, supplies, and to contact attendees.

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









  ## Landry enterprise specification status
  [Specification](https://github.com/MiLandry/Landry-Enterprise-Specification)









## Authentication : Oauth

https://auth0.com/blog/get-started-with-flutter-authentication/



## Swagger

https://app.swaggerhub.com/home

https://app.swaggerhub.com/apis-docs/guevarravirtual/cat-wrangler/1.0.0



## Environment variables

https://create-react-app.dev/docs/advanced-configuration/





## State management: Provider



https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple



## Navigation and routing:

flutter navigation 2.0

https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade

https://flutter.dev/docs/development/ui/navigation



# Developer notes

recommended environment: actual device. For Android, make sure developer mode is enabled, usb is plugged in, android studio recognizes, and restart atb bridge server if needed, (tools > troubleshoot device connections)




## recommended environment: android emulator.

For Android, make sure developer mode is enabled, usb is plugged in, android studio recognizes, and restart atb bridge server if needed, (tools > troubleshoot device connections)

### Hot restart

Hot restart is supported with AS, by clicking playbutton. I don't think reload is supported



## web

web dev does not work, plugins assume that an android or ios sdk exists



problem is that oauth solution does not work like this




Live reload: Not available with web development

Hot Server reload: press r in shell to reload

`flutter run -d chrome`



TODO



extract useful stuff from https://flutter.github.io/samples/#

Automate API SDK, blocked by using windows, will want unix like to do correctly : https://vvsevolodovich.dev/working-with-openapi-in-flutter-fully-automatically/






flutter has this really stupid thing of needing the dev to generate 'g' code (flutter byte code??) TODO make computer 'watch' and auto 'build'







`npx @openapitools/openapi-generator-cli generate -i cat.yaml -g dart-dio -o api/`



run this in API



`pub run build_runner build`



note there is no flutter in this



## Template for tracking implementation status





## Implementation tracking legend

🟥 Problem not solved

🟧 Problem solved by different specification and implementation

🟨 Specification partially implemented (either a custom library or a third party library)

🟩 Specification implemented





## Implementation status

  ## Implementation status

🟩 Authorization
🟩 Authentication
🟩 Navigation and Routing
🟧 Environment variables (env library)
🟩 UI UX
CRUD Support
 Declarative forms
Search and Query
Workflow engine Support
Container ready
Cloud Ready
scripted development builds, starts, and debugging
hot reloading
dependency management


