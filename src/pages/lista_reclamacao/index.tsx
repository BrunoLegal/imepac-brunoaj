import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { style } from "./style";

export default function ListaReclamacao() {
  const [reclamacoes, setReclamacoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReclamacoes() {
      try {
        const querySnapshot = await getDocs(collection(db, "reclamacoes"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReclamacoes(data);
      } catch (error) {
        console.log("Erro ao buscar reclamações:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReclamacoes();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Lista de Reclamações</Text>
      <FlatList
        data={reclamacoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={style.listBox}>
            <Text style={{ fontWeight: "bold" }}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>
              {item.criadoEm?.toDate ? item.criadoEm.toDate().toLocaleString() : ""}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhuma reclamação encontrada.</Text>}
      />
    </View>
  );
}