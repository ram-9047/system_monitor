# System Monitor

A Node.js application that provides real-time system monitoring capabilities, displaying various system metrics and CPU usage statistics.

## Features

- **System Information Display**

  - CPU cores count
  - Total memory (GB)
  - Free memory (MB)
  - System uptime (hours)
  - Platform information
  - System architecture

- **CPU Monitoring**
  - Real-time CPU usage monitoring per core
  - Updates every second
  - Displays results in a clear table format
  - Calculates percentage usage for each CPU core

## Installation

```bash
npm install
```

## Usage

Run the application using:

```bash
node index.js
```

The application will start displaying system information and continuously monitor CPU usage per core in a table format.

## Requirements

- Node.js
- `node:os` module (built-in)

## How It Works

The application uses Node.js's built-in `os` module to:

1. Gather initial system information
2. Calculate CPU usage by comparing measurements over time
3. Display real-time updates in a formatted table

## Output Example

The application displays a table showing:

- Core number
- CPU usage percentage for each core

System information is shown at startup, followed by continuous CPU usage updates.
