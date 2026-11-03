import { TopicData } from '../types';
import { TOPICS_M1_M4 } from './topicsM1to4';
import { TOPICS_M5_M8 } from './topicsM5to8';
import { TOPICS_M9_M12 } from './topicsM9to12';
import { TOPICS_M13_M15 } from './topicsM13to15';

export const ALL_TOPICS: TopicData[] = [
  ...TOPICS_M1_M4,
  ...TOPICS_M5_M8,
  ...TOPICS_M9_M12,
  ...TOPICS_M13_M15,
];

export function getTopicById(id: string): TopicData | undefined {
  return ALL_TOPICS.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
