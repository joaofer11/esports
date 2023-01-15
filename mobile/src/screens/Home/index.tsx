import { styles } from "./styles";
import { useState, useEffect } from "react";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { View, Image, FlatList } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const Home = () => {
  const [gamesList, setGamesList] = useState<Game[]>([]);

  const fetchGamesList = async () => {
    const data = await (await fetch("http://127.0.0.1:3333/games")).json();
    setGamesList(data);
  };

  useEffect(() => {
    fetchGamesList();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logoImg} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que você deseja jogar..."
      />

      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item: gameItem }) => <GameCard data={gameItem} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.gamesList}
      />
    </View>
  );
};
