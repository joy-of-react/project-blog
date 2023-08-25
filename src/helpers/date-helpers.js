import { format } from 'date-fns';

export function getHumanizedDate(publishedOn) {
  return format(new Date(publishedOn), 'MMMM do, yyyy');
}
