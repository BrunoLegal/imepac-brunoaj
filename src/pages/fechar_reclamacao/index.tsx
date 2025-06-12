import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { style } from "./style";

export default function FecharReclamacao() {
  const [reclamacoes, setReclamacoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchReclamacoes() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "reclamacoes"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        titulo: doc.data().titulo,
      }));
      setReclamacoes(data);
    } catch (error) {
      console.log("Erro ao buscar reclamações:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReclamacoes();
  }, []);

  async function fecharReclamacao(id: string) {
    try {
      await deleteDoc(doc(db, "reclamacoes", id));
      Alert.alert("Reclamação fechada e removida!");
      fetchReclamacoes();
    } catch (error) {
      Alert.alert("Erro ao fechar reclamação.");
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Fechar Reclamações</Text>
      <FlatList
        data={reclamacoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[style.listBox, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
            onPress={() =>
              Alert.alert(
                "Fechar Reclamação",
                `Deseja fechar a reclamação "${item.titulo}"?`,
                [
                  { text: "Cancelar", style: "cancel" },
                  { text: "Fechar", style: "destructive", onPress: () => fecharReclamacao(item.id) }
                ]
              )
            }
          >
            <Text>{item.titulo}</Text>
            <Text style={{ color: "red" }}>Fechar</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>Nenhuma reclamação encontrada.</Text>}
      />
    </View>
  );
}