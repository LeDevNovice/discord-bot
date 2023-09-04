const socialNetworksUrlRegex = new RegExp(
  '^(https?://)?(www.)?(facebook.com|fb.me|twitter.com|vxtwitter.com|instagram.com|linkedin.com|youtube.com|youtu.be|pinterest.com|snapchat.com|tiktok.com)/[a-zA-Z0-9.-/?=&#_]+$',
);
const punctuationRegex = /[.,!?]/g;
const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Component})/gu;

export const isASocialNetworkUrl = (url: string): boolean => {
  return socialNetworksUrlRegex.test(url);
};

export const removePunctuation = (text: string) => text.replaceAll(punctuationRegex, '');
export const removeEmoji = (text: string) => text.replaceAll(emojiRegex, '');
