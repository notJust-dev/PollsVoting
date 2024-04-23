import { Redirect, Slot } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

export default function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
}
