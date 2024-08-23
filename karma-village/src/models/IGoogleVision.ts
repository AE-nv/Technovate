export interface LabelAnnotation {
  mid: string;
  description: string;
  score: number;
  topicality: number;
}

export interface Response {
  labelAnnotations: LabelAnnotation[];
  imagePropertiesAnnotation: ImagePropertiesAnnotation;
}

export interface GoogleVisionResponse {
  responses: Response[];
}

export interface Color2 {
  red: number;
  green: number;
  blue: number;
}

export interface Color {
  color: Color2;
  score: number;
  pixelFraction: number;
}

export interface DominantColors {
  colors: Color[];
}

export interface ImagePropertiesAnnotation {
  dominantColors: DominantColors;
}
