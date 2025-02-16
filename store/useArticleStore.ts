import { create } from "zustand";

interface ArticleState {
  articleId: string | null;
  setArticleId: (id: string) => void;
}

export const useArticleStore = create<ArticleState>((set) => ({
  articleId: null,
  setArticleId: (id) => set({ articleId: id }),
}));
