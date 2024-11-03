import emptyChat from "../../assets/image/pana.png";
import ellipse from "../../assets/image/ellipse.png";
import { Image } from "@chakra-ui/react";

export default function EmptyChat() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10">
      <div className="relative">
        <Image src={emptyChat} className="absolute left-0 top-0" />
        <Image src={ellipse} />
      </div>
      <div className="text-center text-lg">
        <p>Tidak ada pesan terpilih</p>
        <p className="font-medium">Pilih pesan untuk dibaca</p>
      </div>
    </div>
  );
}
