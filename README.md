# CinemaOS

This is a starter-kit for a CinemaOS.

## Goal

- functional requirements
  - buy snacks (simulate a rich dish and select items to buy)
  - toilet monitor (simulate showing a free seat)
  - show a movie (simulate the movie just continues)
- non-functional requirements
  - style focus
    - low-light / dark-theme only
    - tablet only
    - plain, simple design with good accessibility for the target-group
  - usable without keyboard input
- explicitly excluded
  - user login (the user is known by the device in use)
  - paying snacks at checkout (assume there is a pre-paid balance)
  - backend integration (it's a fully static mockup)
  - responsive-design (tabled with fixed dimensions only)

## Development

- a bootstrapped project with [create-react-app](https://github.com/facebook/create-react-app).
- react-router-dom ([see some examples](https://reactrouter.com/docs/en/v6/getting-started/tutorial)) working with [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
- [react-bootstrap](https://react-bootstrap.github.io/) using a default [dark theme](https://github.com/vinorodrigues/bootstrap-dark-5)
- [error boundaries](https://reactjs.org/docs/error-boundaries.html) implemented by [react-error-boundary](https://www.npmjs.com/package/react-error-boundary)
