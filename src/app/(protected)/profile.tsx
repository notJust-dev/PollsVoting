import { View, Text, Button } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../providers/AuthProvider';

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <View style={{ padding: 10 }}>
      <Text>User id: {user?.id}</Text>

      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
