import type { IQuest } from "@/models/IQuest";

class QuestService {
  private quests: IQuest[] = [
    {
      id: 1,
      title: "I am looking for a bike",
      description: "I am moving to Leuven and i want to buy a bike.",
      image: "bike.jpeg",
      link: "bike",
    },
    {
      id: 2,
      title: "I am looking for a car",
      description: "I want to buy a car.",
      image: "car.jpeg",
      link: "car",
    },
    {
      id: 3,
      title: "I am looking for a chair",
      description:
        "I am going to move to Ghent and I am looking for a chair in the region of Ghent.",
      image: "red-chair.png",
      link: "chair",
    },
  ];

  public getAllQuests(): IQuest[] {
    return this.quests;
  }

  public getQuestById(id: number): IQuest | undefined {
    return this.quests.find((x) => x.id === id);
  }
}

export const questService = new QuestService();
