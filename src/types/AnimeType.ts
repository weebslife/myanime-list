export type GenreType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeType = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  year: number;
  score: number;
  url: string;
  synopsis: string;
  genres: GenreType[];
};


export type AnimeResponse = {
  data: AnimeType[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };

};
