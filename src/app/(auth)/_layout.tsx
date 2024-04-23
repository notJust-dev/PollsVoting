import { Redirect, Slot } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href="/profile" />;
  }

  return <Slot />;
}
