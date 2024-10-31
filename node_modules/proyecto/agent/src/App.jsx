import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Registro";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";
import { TaskFilter } from "./components/TaskCard";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <div className="flex h-screen">
              {/* Sidebar estático */}
              <TaskFilter />

              {/* Contenido principal */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar estático */}
                <Navbar />
                
                {/* Contenido desplazable con todo el ancho y centrado */}
                <main className="flex-1 custom-scrollbar flex justify-center px-10 w-full py-20 ">
                  <div className="w-full max-w-8xl"> {/* Limitar el ancho máximo para centrar el contenido */}
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<RegisterPage />} />

                      <Route element={<ProtectedRoute />}>
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/tasks/new" element={<TaskFormPage />} />
                        <Route path="/tasks/:id" element={<TaskFormPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                      </Route>
                    </Routes>
                    <br />
                    <br />
                  </div>
                </main>
              </div>
            </div>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;

