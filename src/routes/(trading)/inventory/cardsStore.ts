import { writable, derived } from "svelte/store";
import type { Asset, Description, SteamCard, Tag } from "./[user]/steam";

interface TrackedCard {
  card: SteamCard;
  numberSelected: number;
}

const cards = writable<TrackedCard[]>([]);
const searchQuery = writable<string>("");

const setAssets = (assets: Asset[], descriptions: Description[]) => {
  const getClassidCounts = (assets: Asset[]) => {
    return assets.reduce<Record<string, number>>((acc, asset) => {
      const { classid } = asset;
      acc[classid] = (acc[classid] || 0) + 1;
      return acc;
    }, {});
  };

  const getNameAndTypeByClassid = (classid: string, descriptions: Description[]) => {
    const description = descriptions.find((description) => description.classid === classid);
    return description ? description : null;
  };

  const classidCounts = getClassidCounts(assets);

  const sortedByType = Object.entries(classidCounts)
    .map(([classid, count]) => {
      const description = getNameAndTypeByClassid(classid, descriptions);
      return {
        card: { count, description, price: "?", numberOfCardsInBadge: -1 },
        numberSelected: 0
      };
    })
    .filter((trackedCard: TrackedCard) => {
      if (!trackedCard.card.description) return true;
      return trackedCard.card.description.tags.some(
        (tag: Tag) => tag.localized_tag_name === "Trading Card"
      );
    });

  cards.set(sortedByType);
};

const filteredCards = derived([cards, searchQuery], ([$cards, $searchQuery]) =>
  $cards
    .filter((trackedCard: TrackedCard) => {
      if ($searchQuery === "") return true;
      if (!trackedCard.card.description) return false;

      return (
        trackedCard.card.description.name.toLowerCase().includes($searchQuery.toLowerCase()) ||
        trackedCard.card.description.type.toLowerCase().includes($searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (!a.card.description || !b.card.description) return 0;

      return a.card.description.type.localeCompare(b.card.description.type);
    })
);

const selectedCards = derived(cards, ($cards) =>
  $cards
    .filter((trackedCard: TrackedCard) => trackedCard.numberSelected > 0)
    .sort((a, b) => {
      if (!a.card.description || !b.card.description) return 0;

      return a.card.description.type.localeCompare(b.card.description.type);
    })
);

const totalPrice = derived(selectedCards, ($cardsWithSelection) => {
  let total = 0;

  for (const trackedCard of $cardsWithSelection) {
    const price = parseFloat(trackedCard.card.price.replace(/[^0-9.-]+/g, ""));

    if (isNaN(price)) {
      return "???";
    }

    total += price * trackedCard.numberSelected;
  }

  return Math.floor(total * 100) / 100;
});

const updateCardPrice = (classid: string, newPrice: string) => {
  cards.update((trackedCards) => {
    return trackedCards.map((trackedCard) => {
      if (trackedCard.card.description?.classid === classid) {
        return {
          ...trackedCard,
          card: {
            ...trackedCard.card,
            price: newPrice
          }
        };
      }
      return trackedCard;
    });
  });
};

const updateNumberOfCardsInBadge = (appid: number, numberOfCardsInBadge: number) => {
  cards.update((trackedCards) => {
    return trackedCards.map((trackedCard) => {
      if (trackedCard.card.description?.market_fee_app === appid) {
        return {
          ...trackedCard,
          card: {
            ...trackedCard.card,
            numberOfCardsInBadge: numberOfCardsInBadge
          }
        };
      }
      return trackedCard;
    });
  });
};

const addCard = (card: SteamCard) => {
  cards.update((trackedCards) => {
    if (card.description == null) return trackedCards;

    let currentCardIndex = trackedCards.findIndex(
      (trackedCard) => trackedCard.card.description?.classid === card.description?.classid
    );

    if (currentCardIndex === -1) {
      return trackedCards;
    }

    if (trackedCards[currentCardIndex].numberSelected + 1 > card.count) return trackedCards;

    trackedCards[currentCardIndex].numberSelected += 1;

    return trackedCards;
  });
};

const removeCard = (card: SteamCard) => {
  cards.update((trackedCards) => {
    if (card.description == null) return trackedCards;

    let currentCardIndex = trackedCards.findIndex(
      (trackedCard) => trackedCard.card.description?.classid === card.description?.classid
    );

    if (currentCardIndex === -1) return trackedCards;

    if (trackedCards[currentCardIndex].numberSelected - 1 > 0) {
      trackedCards[currentCardIndex].numberSelected -= 1;
    } else {
      trackedCards[currentCardIndex].numberSelected = 0;
    }

    return trackedCards;
  });
};

export {
  cards,
  selectedCards,
  searchQuery,
  filteredCards,
  setAssets,
  totalPrice,
  updateCardPrice,
  updateNumberOfCardsInBadge,
  addCard,
  removeCard
};