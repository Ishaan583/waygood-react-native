import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { programs } from "../../data/programs";

export default function HomeScreen() {
  const router = useRouter();
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} activeOpacity={0.85}>
      <View style={styles.cardHeader}>
        <Text style={styles.flag}>{item.flag}</Text>
        <View style={styles.countryBadge}><Text style={styles.countryText}>{item.country}</Text></View>
      </View>
      <Text style={styles.universityName}>{item.university}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.viewMore}>View Details →</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1f3c" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌍 WayGood</Text>
        <Text style={styles.headerSubtitle}>Find your study abroad program</Text>
      </View>
      <FlatList data={programs} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4ff" },
  header: { backgroundColor: "#1a1f3c", paddingVertical: 24, paddingHorizontal: 20, paddingTop: 40 },
  headerTitle: { fontSize: 28, fontWeight: "bold", color: "#ffffff" },
  headerSubtitle: { fontSize: 14, color: "#a0aec0", marginTop: 4 },
  list: { padding: 16, paddingBottom: 32 },
  card: { backgroundColor: "#ffffff", borderRadius: 16, padding: 18, marginBottom: 14, elevation: 3 },
  cardHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  flag: { fontSize: 32 },
  countryBadge: { backgroundColor: "#eef2ff", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  countryText: { color: "#4f46e5", fontSize: 12, fontWeight: "600" },
  universityName: { fontSize: 17, fontWeight: "700", color: "#1a1f3c", marginBottom: 6 },
  description: { fontSize: 13, color: "#718096", lineHeight: 20, marginBottom: 12 },
  viewMore: { fontSize: 13, color: "#4f46e5", fontWeight: "600" },
});
