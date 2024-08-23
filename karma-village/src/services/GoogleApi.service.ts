import { GoogleVisionResponse } from "@/models/IGoogleVision";

class GoogleApiService {
  private static GOOGLE_VISION_API_KEY =
    "AIzaSyDLMr5jUYv4tNc-RMRQAHZh6a68PUbLJjs";

  private static googleVisionUrl = `https://vision.googleapis.com/v1/images:annotate?key=${GoogleApiService.GOOGLE_VISION_API_KEY}`;

  private static async callGoogleVision(
    base64EncodedFile: string
  ): Promise<GoogleVisionResponse> {
    const dataOptions = {
      requests: [
        {
          features: [
            {
              type: "LABEL_DETECTION",
            },
            {
              type: "IMAGE_PROPERTIES",
            },
          ],
          image: {
            content: base64EncodedFile,
          },
        },
      ],
    };

    const response = await fetch(GoogleApiService.googleVisionUrl, {
      method: "POST",
      body: JSON.stringify(dataOptions),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  public async detectLabels(file: File): Promise<GoogleVisionResponse> {
    const base64EncodedFile = await this.blobToBase64(file);
    return await GoogleApiService.callGoogleVision(base64EncodedFile);
  }

  private async blobToBase64(blob: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          resolve(
            reader.result
              .toString()
              .replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
          );
        }
      };

      reader.readAsDataURL(blob);
    });
  }
}

export const googleApiService = new GoogleApiService();
