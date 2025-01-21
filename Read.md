# Todo List Smart Contract

This project implements a decentralized Todo List application using Ethereum smart contracts. It allows users to add and manage tasks on the Ethereum blockchain, ensuring transparency and immutability.

## Features

- **Add Tasks**: Users can add new tasks to their personal todo list.
- **Complete Tasks**: Users can mark tasks as completed.
- **Task Tracking**: Each task has a unique identifier, content description, and a completion status.

## Smart Contract Details

The core functionality is implemented in the `TodoList` smart contract written in Solidity. Key components include:

- **Task Struct**: Defines the structure of a task with an `id`, `content`, and `completed` status.
- **Mapping**: Stores tasks using a mapping from `uint` to `Task`.
- **Events**: Emits `TaskCreated` and `TaskCompleted` events upon creation and completion of tasks, respectively.

## Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system.
- **Truffle**: Install Truffle globally using `npm install -g truffle`.
- **Ganache**: For local Ethereum blockchain simulation.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/syedibtisam/todo-list-smart-contract.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd todo-list-smart-contract
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Deployment

1. **Start Ganache**: Open Ganache to start a local blockchain instance.
2. **Compile Contracts**:
   ```bash
   truffle compile
   ```
3. **Migrate Contracts**:
   ```bash
   truffle migrate
   ```

## Testing

Run the following command to execute the test suite:
```bash
truffle test
```

## Usage

After deployment, interact with the smart contract using Truffle Console or integrate it with a frontend application to manage tasks.

## Contributing

Contributions are welcome. Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

