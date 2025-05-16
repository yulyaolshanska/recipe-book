# 🍽️ Recipe Book

A full-stack recipe application built with  **TypeScript**, and **Node.js**.

## 🧩 Project Structure

- `frontend/` — built with Vite, React, TypeScript
- `backend/` — built with Express, TypeScript

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yulyaolshanska/recipe-book.git
cd recipe-book
```

## 🔐 Environment Variables

1. Create a `.env` file in both `frontend/` and `backend/` directories
2. Example variables:
  ### .env for frontend

```
VITE_API_BASE_URL=http://localhost:3000/api/recipes
```

### .env for backend

```
RECIPE_API_BASE_URL=https://www.themealdb.com/api/json/v1/1
PORT=3000
CLIENT_URL=http://localhost:5173
```

## 🧪 How to Run Locally
## Backend
```
cd backend
npm install
npm run start:dev
```

Runs on: http://localhost:3000

## Frontend
```
cd frontend
npm install
npm run dev
```

Runs on: http://localhost:5173

---
## 🛠 Backend

### Tech Stack

- Node.js
- Express.js
- TypeScript

### Endpoints

1. **Get Available Recipes**
   - Fetches recipes from [TheMealDB API](https://www.themealdb.com/api.php)
   - Supports filtering by:
     - All recipes
     - Ingredient
     - Country
     - Category

2. **Get Recipe Info**
   - Detailed recipe data


## 📡 API Endpoints

### `GET /api/recipes`

Fetches recipes from [TheMealDB](https://www.themealdb.com/api.php).

#### 🔍 Query Parameters

- **All recipes:**  
/api/recipes

- **Filter by ingredient:**  
/api/recipes?ingredient=chicken

- **Filter by country/area:**  
/api/recipes?country=Canadian

- **Filter by category:**  
/api/recipes?category=Seafood
---

## 🧑‍🍳 Frontend

### Tech Stack

- React.js
- TypeScript

### Pages

1. **Recipe List Page**
   - Displays a title based on the applied filter
   - Shows a list of recipes
   - Each item navigates to the Recipe Info Page

2. **Recipe Info Page**
   - **Image** 
   - **Name** 
   - **Country:** navigates to country-filtered list
   - **Instructions** 
   - **Ingredients:** List with each item clickable (filters by ingredient)
   - **Sidebar:** Displays current recipe category recipes (clickable)

---

## 🎨 Styling & UX

- Module CSS 
- Responsive, user-friendly design 




