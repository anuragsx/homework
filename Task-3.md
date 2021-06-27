Frontend part:
  a.	Tools, frameworks, npm libraries you plan to use and why
  Will prefer to use ReactJS because of its features -
  - Virtual DOM
  -  JSX
  - One-way data binding
  - Declarative UI
  - Component-based architecture
  NPM libraries -
  - Material UI - to make UI more eye catching, light and user friendly
  - Styled Components - Will use this library to build small, reusable components responsible for the look of the app  
  - Enzyme - to test react Components
  - Redux - for state management of the react app.
  - React Virtualized - improve the efficiency of the large list and tabular data rendering
  - Redux form - Redux Form is a set of reducer and action creators that makes it easier to implement customized complex forms.

  b.	Directory structure for source code folder
  [-] components
      [-] Profile
          index.js
          Profile.spec.js
          Profile.css
      [+] ProfileDetails
      [+] ProfileList
      [+] ProfileListItem
  [+] constants
  [+] hooks
  [+] context
  routes.js
  index.js

  c.	List of components which you’ll implement (with short description)
   - Profile - to show profile information like picture, UserFullName, UserEmail, ProfileDetails
   - ProfileList - to list down profile items and modularise the component
   - ProfileListItem - to list individual item of profile list and separation of concerns.
   - ProfileDetails - separation of concerns.

  d.	For one of the components also provide in which directory/-ies component’s file/-es will be located
  Similar to point b.

  e.	Benefits/drawbacks comparing with traditional (not-SPA) app approach
  - Benefits -
      Battery reusability
      Optimization
      Client-side rendering
      User experience
      Easy debugging
      Performance
      Less complex implementation
      Better caching
      Better SEO optimization

  f.	Any other comments and suggestions
      test code coverage to minimize the defects.

Backend part:
a.	Short description of API – URI, format, why needed
/api/v1/profiles
/api/v1/profiles/{id}

id: id
name: string
surname: string
email: string
imageUrl: string
details: string

APIs to get profile details, so that all profile details can be extracted from the json response of API to manipulate in the react front end code.

b.	Framework
Node JS
  - Keeping things simple
  - Faster time-to-market
  - Scalability
  - Battle-tested old hand
  - MVP development
  - Community
