import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ArtistType } from "@/types";
import { Button } from "@/components/ui/button";
import { useColorScheme } from "@/libs/useColorScheme";
import { getColors } from "@/constants/color";

export default function ApiArtistCard({
  artist,
  handleSave,
}: {
  artist: ArtistType;
  handleSave: (artist: any) => void;
}) {
  const { colorScheme } = useColorScheme();
  const currentColors = getColors(colorScheme as "light" | "dark");

  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader className="pb-2 bg-slate-50">
        <View className="flex flex-row justify-between">
          <CardTitle className="text-2xl font-extrabold">
            {artist.name}
          </CardTitle>
          {artist.score !== undefined && (
            <View className="flex items-center space-x-1">
              <Text className="text-sm font-medium">Score:</Text>
              <Text className="text-lg font-bold">{artist.score}</Text>
              <Text className="text-xs text-muted-foreground">/100</Text>
            </View>
          )}
        </View>
        {artist.sort_name && artist.sort_name !== artist.name && (
          <Text className="text-sm text-muted-foreground">
            {artist.sort_name}
          </Text>
        )}
      </CardHeader>

      <CardContent className="grid gap-4 pt-4">
        {artist.type && (
          <View className="flex flex-row items-center gap-2">
            <Ionicons name="people-outline" size={18} color={"#64748b"} />
            <Text className="text-lg text-slate-500">{artist.type}</Text>
          </View>
        )}

        {artist.country && (
          <View className="flex flex-row items-center gap-2">
            <Ionicons name="flag-outline" size={18} color={"#64748b"} />
            <Text className="text-lg text-slate-500">{artist.country}</Text>
          </View>
        )}

        {(artist.begin_date || artist.end_date) && (
          <View className="flex items-left space-x-2">
            <Text className="text-sm">
              {artist.begin_date || "Unknown"} - {artist.end_date || "Present"}
            </Text>
          </View>
        )}

        {artist.disambiguation && (
          <View className="flex flex-row items-center gap-2">
            <Ionicons
              name="information-circle-outline"
              size={18}
              color={"#295491"}
            />
            <Text className="text-base text-muted-foreground">
              {artist.disambiguation}
            </Text>
          </View>
        )}

        <View className="flex flex-row justify-between items-left">
          <Badge variant="secondary" className="w-fit">
            <Text>ID: {artist.id}</Text>
          </Badge>
          <Pressable
            className="px-3 py-2 border rounded-md"
            onPress={() => handleSave(artist)}
          >
            <Ionicons name="save-outline" size={18} color={"#295491"} />
          </Pressable>
        </View>
      </CardContent>
    </Card>
  );
}