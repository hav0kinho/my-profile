import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://play-lh.googleusercontent.com/vBW1V5rGuDnsf7qF-NCO6v1YNTwR2tJhTAKePZcvqaQuh_AJ3Qu9iiBit6ht63SZ7g=w240-h480-rw",
    alt: "Imagem de Alanzoka",
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://i.pinimg.com/474x/0b/1b/cd/0b1bcd101f3af710835b4ce87671a057.jpg",
    alt: "Imagem de Cellbit",
  },
];

const socialListData = [
  {
    url: "https://www.twitch.tv/hav0kinho",
    imageUrl: "/assets/twitch.svg",
    alt: "Imagem da Twitch",
  },
  {
    url: "https://www.youtube.com/@ruallysonfelype",
    imageUrl: "/assets/youtube.svg",
    alt: "Imagem do Youtube",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que mais curto jogar!"
          className="games-list"
        >
          {gameListData.map((item) => (
            <ListItem href={item.url} imageUrl={item.imageUrl} alt={item.alt} />
          ))}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não posso perder!"
          className="channel-list"
        >
          {channelListData.map((item) => (
            <ListItem href={item.url} imageUrl={item.imageUrl} alt={item.alt} />
          ))}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map((item) => (
            <ListItem href={item.url} imageUrl={item.imageUrl} alt={item.alt} />
          ))}
        </Section>
      </main>
    </div>
  );
}

export default App;
