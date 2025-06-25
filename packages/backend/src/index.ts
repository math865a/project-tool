import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { User, ApiResponse, generateId, formatDate, APP_NAME } from '@project-tool/shared';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// In-memory storage for demo purposes
const users: User[] = [];

// Routes
app.get('/', (req, res) => {
  const response: ApiResponse<string> = {
    success: true,
    data: `Welcome to ${APP_NAME} Backend API!`
  };
  res.json(response);
});

app.get('/api/users', (req, res) => {
  const response: ApiResponse<User[]> = {
    success: true,
    data: users
  };
  res.json(response);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Name and email are required'
    };
    return res.status(400).json(response);
  }

  const newUser: User = {
    id: generateId(),
    name,
    email,
    createdAt: new Date()
  };

  users.push(newUser);

  const response: ApiResponse<User> = {
    success: true,
    data: newUser
  };
  
  res.status(201).json(response);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  
  if (!user) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'User not found'
    };
    return res.status(404).json(response);
  }

  const response: ApiResponse<User> = {
    success: true,
    data: user
  };
  
  res.json(response);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: formatDate(new Date()) });
});

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} Backend server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📚 API docs: http://localhost:${PORT}/`);
}); 