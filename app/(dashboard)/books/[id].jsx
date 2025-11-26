import { StyleSheet, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import useBooks from "../../../hooks/UseBooks";
import { Colors } from "../../../constants/Colors";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useLocalSearchParams();
  const { fetchBookById, deleteBook } = useBooks();
  const router = useRouter();

  const handleDelete = async () => {
    await deleteBook(id);
    setBook(null);
    router.replace("/books");
  };

  useEffect(() => {
    const loadBook = async () => {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    };
    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText title={true}>Description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
        <Spacer height={20} />
        <ThemedButton style={styles.delete} onPress={handleDelete}>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Delete Book
          </Text>
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 24,
    borderRadius: 12,
    marginTop: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  delete: {
    backgroundColor: Colors.warning,
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
  },
});
