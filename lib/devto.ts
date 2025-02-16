import { ArticlesArray } from "@/types/Article";
import axios from "axios";

const DEVTO_API_URL = "https://dev.to/api/articles";

export async function getArticles(username: string): Promise<ArticlesArray> {
  try {
    const response = await axios.get(`${DEVTO_API_URL}?username=${username}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching articles from Dev.to:", error);
    return [];
  }
}

export async function getArticleById(id: string) {
  try {
    const response = await axios.get(`${DEVTO_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article from Dev.to:", error);
    return null;
  }
}
