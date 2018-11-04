import axios, {AxiosResponse} from 'axios';

class GoogleApiService {

    private static doGoogleVisionCall(base64EncodedFile: string): Promise<GoogleVisionResponse> {
        return axios.post<GoogleVisionResponse>('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDlXHnneZE56Jm-PSqxlTO-zp7_1leXOyw', {
            requests: [
                {
                    features: [
                        {
                            type: 'LABEL_DETECTION',
                        },
                        {
                            type: 'IMAGE_PROPERTIES',
                        },
                    ],
                    image: {
                        content: base64EncodedFile,
                    },
                },
            ],
        }).then((response: AxiosResponse<GoogleVisionResponse>) => {
            return response.data;
        });
    }

    public detectLabels(file: File): Promise<GoogleVisionResponse> {
        return this.blobToBase64(file, GoogleApiService.doGoogleVisionCall);
    }

    private blobToBase64(blob, callback): Promise<GoogleVisionResponse> {
        return new Promise<GoogleVisionResponse>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const dataUrl = reader.result;
                let base64;
                if (typeof dataUrl === 'string') {
                    base64 = dataUrl.split(',')[1];
                }
                resolve(callback(base64));
            };
            reader.readAsDataURL(blob);
        });
    }
}

export const googleApiService = new GoogleApiService();

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
