# Angular Micro Frontend Sample

This repository includes basic configuration for Micro Frontend application written in Angular.

## Environment

- Angular CLI: ~15.1.4.
- Angular: ^15.1.0.
- Node: 16.14.0.
- npm: 8.3.1

## Workspace

This project includes 2 applications and 1 library:

- `hostApp` - This application is a shell for micro frontend app
- `remoteApp` - This application is a remote application used inside `hostApp`
- `shared` - This is the library with shared resources used in both `hostApp` and `remoteApp`

## Development server

1. `npm run build shared` - Build `shared` library
2. `npm run run:all` - Start development server for `hostApp` and `remoteApp`
3. Visit [localhost:4200](http://localhost:4200)
