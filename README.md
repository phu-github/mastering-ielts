# Mastering IELTS

Mastering IELTS is a web application designed to help users practice and improve their English skills in preparation for the IELTS exam.

## Features




## Tech Stack
- **Backend:** Django (Python) for handling API and business logic.
- **Frontend:** React.js for a responsive and dynamic user experience.
- **Database:** PostgreSQL for scalable and reliable data management.
- **Server:** Nginx for efficient request handling and deployment.

## Installation
### Prerequisites
Ensure you have the following installed:
- Python (3.10+)
- Node.js (20+)
- PostgreSQL (latest stable version)
- Docker (optional for containerized deployment)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/phu-github/mastering-ielts.git
   cd mastering-ielts
   ```
2. Create a virtual environment and install dependencies:
   ```sh
   uv sync
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
   Edit `.env` with your database credentials.
4. Run database migrations:
   ```sh
   python manage.py migrate
   ```
5. Start the Django development server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

### Start project by docker compose
1. Navigate to the project directory:
   ```sh
   cd project
   ```
2. Run the docker-compose file:
   ```sh
   docker compose up -d
   ```
3. Navigate to http://localhost:8000 to view the project.

### Deployment
For production deployment:
- Use **Nginx** to serve the React frontend and proxy API requests to the Django backend.
- Use **Gunicorn** as the WSGI server for Django.
- Configure **Docker** and **Docker Compose** for a containerized setup.

Happy Learning! 🎓

