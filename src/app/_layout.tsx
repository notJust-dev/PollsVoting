import { Stack } from 'expo-router';
import AuthProvider from '../providers/AuthProvider';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
