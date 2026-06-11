import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { programs } from "../../data/programs";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const program = programs.find((p) => p.id === Number(id));
  if (!program) return <View><Text>Not found</Text></View>;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.flag}>{program.flag}</Text>
          <Text style={styles.universityName}>{program.university}</Text>
          <View style={styles.countryBadge}><Text style={styles.countryText}>📍 {program.country}</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.infoRow}>
            <View style={styles.infoCard}><Text style={styles.infoLabel}>💰 Tuition</Text><Text style={styles.infoValue}>{program.tuition}</Text></View>
            <View style={styles.infoCard}><Text style={styles.infoLabel}>📅 Intake</Text><Text style={styles.infoValue}>{program.intake}</Text></View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About the University</Text>
            <Text style={styles.sectionText}>{program.details}</Text>
          </View>
          <TouchableOpacity style={styles.applyButton}><Text style={styles.applyButtonText}>Apply Now via WayGood 🚀</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4ff" },
  hero: { backgroundColor: "#1a1f3c", padding: 24, paddingTop: 50, alignItems: "center" },
  backButton: { position: "absolute", top: 50, left: 20 },
  backText: { color: "#a0aec0", fontSize: 15 },
  flag: { fontSize: 60, marginBottom: 12 },
  universityName: { fontSize: 22, fontWeight: "bold", color: "#ffffff", textAlign: "center", marginBottom: 10 },
  countryBadge: { backgroundColor: "#2d3561", paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  countryText: { color: "#a0c4ff", fontSize: 13 },
  content: { padding: 16 },
  infoRow: { flexDirection: "row", gap: 12, marginBottom: 16, marginTop: 8 },
  infoCard: { flex: 1, backgroundColor: "#ffffff", borderRadius: 12, padding: 14, alignItems: "center", elevation: 2 },
  infoLabel: { fontSize: 12, color: "#718096", marginBottom: 6 },
  infoValue: { fontSize: 13, fontWeight: "700", color: "#1a1f3c", textAlign: "center" },
  section: { backgroundColor: "#ffffff", borderRadius: 16, padding: 18, marginBottom: 16, elevation: 2 },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#1a1f3c", marginBottom: 10 },
  sectionText: { fontSize: 14, color: "#4a5568", lineHeight: 22 },
  applyButton: { backgroundColor: "#4f46e5", borderRadius: 14, padding: 16, alignItems: "center", marginBottom: 30 },
  applyButtonText: { color: "#ffffff", fontSize: 16, fontWeight: "700" },
});
