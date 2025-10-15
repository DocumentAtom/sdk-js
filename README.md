<img src="assets/icon.png" height="48">

# JavaScript SDK for DocumentAtom

## Features

- Multi-tenant support with tenant GUID management
- Graph management
- Node and edge operations
- Route finding between nodes
- Search capabilities for graphs, nodes, and edges
- GEXF format export support
- Built-in retry mechanism and error handling
- Comprehensive logging system
- Access key authentication support

## Requirements

- Node.js v18.20.4
- npm

### Dependencies

- `jest` - for testing
- `msw` - for mocking the api
- `superagent` - for making the api calls
- `url` - for url parsing
- `util` - for utility functions
- `uuid` - for generating unique ids

### Setting up Pre-commit Hooks

The pre-commit hooks will run automatically on `git commit`. They help maintain:

- Code formatting (using ruff)
- Import sorting
- Code quality checks
- And other project-specific checks

### Running Tests

The project uses `jest` for running tests in isolated environments. Make sure you have jest installed, which should automatically be there if you have installed dependencies via `npm i` command:

```bash
# Run only the tests
npm run test

# Run tests with coverage report
npm run test:coverage

```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details

## Feedback and Issues

Have feedback or found an issue? Please file an issue in our GitHub repository.

## Version History

Please refer to [CHANGELOG.md](CHANGELOG.md) for a detailed version history.
