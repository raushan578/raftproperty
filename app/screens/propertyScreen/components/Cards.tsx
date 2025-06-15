import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import DescriptionSection from "./DescriptionSection";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export interface Property {
  id: string;
  title: string;
  location: string;
  images: string[];
  tags: string[];
  price: string;
  description: string;
}

interface Props {
  property: Property;
}

const Cards: React.FC<Props> = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<string>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.card}>
      <FlatList
        ref={flatListRef}
        data={property.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        onScroll={handleScroll}
      />

      <View style={styles.indicatorContainer}>
        {property.images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorDot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.tagsContainer}>
        {property.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.subtitle}>{property.location}</Text>
        <Text
          style={[
            styles.title,
            { fontWeight: "700", marginTop: 8, color: "#555" },
          ]}
        >
          {property.price}
        </Text>
      </View>
      <DescriptionSection description={property.description || ""} />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    marginVertical: 12,
    marginHorizontal: 16,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: SCREEN_WIDTH - 32, // Adjust for horizontal margin
    height: 180,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 6,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#228B22",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 6,
  },
  tag: {
    backgroundColor: "#e6f4ea",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 12,
    color: "#228B22",
    fontWeight: "500",
  },
  textContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ccc22",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
});
