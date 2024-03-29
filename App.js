import { AuthProvider } from "./context/AuthContext";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

// eas build --platform android --profile androidapk