# Redux Cart

This project is a simple shopping cart built with React and Redux. It demonstrates the following features:
- Fetching data from a JSON source.
- Displaying cart items with their prices and quantities.
- Increasing and decreasing the quantity of each item.
- Automatically updating the total quantity and total amount as item quantities change.

## Getting Started

## Project Structure

- `src/products.js`: Contains json file.
- `src/cartSlice.js`: Contains the Redux reducer to handle cart actions.
- `src/store.js`: Sets up the Redux store.
- `src/App.js`: Main app component that includes the cart.
- `src/CardCart.js`: Cart component that displays items and handles quantity updates.

## Usage

- Increase quantity: Click the `+` button next to an item.
- Decrease quantity: Click the `-` button next to an item.
- Total quantity and total amount will update automatically.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss.




















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
