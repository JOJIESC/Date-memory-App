export interface MemoryType {
  id: number;
  name: string;
  image: string;
  releaseDate: string;
  writeSpeed: string;
  readSpeed: string;
  pros: string[];
  cons: string[];
}

export interface MemoryCardProps {
  memory: MemoryType;
  onLike: () => void;
  onDislike: () => void;
}