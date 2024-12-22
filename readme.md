# Waste Recycling Management

**Waste Recycling Management** is a web-based application designed to streamline and enhance the processes involved in waste recycling. The platform aims to promote efficient waste management practices, encouraging environmental sustainability and resource conservation.

---

## Features

- **Registration and Authentication**: Secure sign-up and login functionalities to ensure authorized access.

- **Waste Collection Requests**: Schedule waste pickups, specifying the type and quantity of waste.

- **Recycling Statistics**: Displays data on the amount of waste recycled, contributing to environmental awareness.
  
- **Manufacturer Role**: Buy waste and create product, specifying type of waste and name of product.

---

## Installation Guide

To set up the **Waste Recycling Management** application locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure [Node.js](https://nodejs.org/) is installed on your system.

- **Git**: Install [Git](https://git-scm.com/) to clone the repository.

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sreeja-e/waste-recycling-management.git
   ```

2. **Navigate to the Backend Directory**:
   ```bash
   cd waste-recycling-management/backend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the `backend` directory.
   - Define necessary environment variables such as database connection strings, authentication secrets, etc.

5. **Run the Backend Server**:
   ```bash
   npm start
   ```
   The backend server will typically run on `http://localhost:5555`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the `frontend` directory.
   - Define necessary environment variables such as API endpoint URLs.

4. **Run the Frontend Application**:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:5555`.

---

## Project Structure

The repository is organized as follows:

- **backend/**: Contains the server-side code, including API endpoints, database models, and business logic.

- **frontend/**: Contains the client-side code, including React components, styles, and assets.

- **README.md**: Provides an overview and instructions for the project.

---

## Usage

1. **Access the Application**:
   Open `http://localhost:5555` in your web browser.

2. **Register an Account**:
   Sign up with your email and password to create a new account.

3. **Log In**:
   Use your credentials to log in to the application.

4. **Request Waste Collection**:
   - Navigate to the waste collection section.
   - Specify the type (e.g., plastic, organic) and quantity of waste.
   - Schedule a pickup time.

5. **Track Your Requests**:
   View the status of your waste collection requests in real-time.

6. **Learn About Waste Segregation**:
   Access guidelines and tips on proper waste segregation to facilitate recycling.

7. **Monitor the recycling progress in real-time through the dashboard**:
   Access Recycling Data

8. **View reports on the quantity and types of waste recycled**:
   Gain insights into recycling trends and operational efficiency.

9. **Partner with manufacturers for efficient material reuse**
---

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**.

2. **Create a New Branch**:
   ```bash
   git checkout -b feature-name
   ```

3. **Make Your Changes**.

4. **Commit Your Changes**:
   ```bash
   git commit -m "Add feature description"
   ```

5. **Push to Your Branch**:
   ```bash
   git push origin feature-name
   ```

6. **Submit a Pull Request**.

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sreeja-e/waste-recycling-management/blob/main/LICENSE) file for details.

---

## Contact

For questions or support, please open an issue in the [GitHub repository](https://github.com/sreeja-e/waste-recycling-management/issues).

---

