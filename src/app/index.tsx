import { Stack } from 'expo-router';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const polls = [{ id: 1 }, { id: 2 }, { id: 3 }];

// http://localhost:8082/polls/details?id=2
// http://localhost:8082/polls/2
// http://localhost:8082/users/VadimNotJustDev

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Polls' }} />
      <FlatList
        data={polls}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Link href={`/polls/${item.id}`} style={styles.pollContainer}>
            <Text style={styles.pollTitle}>
              {item.id}: Example poll question
            </Text>
          </Link>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  pollContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  pollTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
