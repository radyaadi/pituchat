import { Image } from "@chakra-ui/react";

export default function Icon({ size, src }: { size: string; src: string }) {
  return <Image h={size} w={size} fit="contain" src={src} />;
}
